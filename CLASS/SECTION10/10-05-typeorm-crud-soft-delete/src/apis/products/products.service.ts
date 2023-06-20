import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IproductsServiceUpdate,
} from './interfaces/products-service.interface';

@Injectable() // 디폴트 설정
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,
      // 하나씩 직접 나열하는 방식
      //   name: '마우스',
      //   description: '마우스 조아요',
      //   price: 3000,
    });

    // result 안에는 무엇이 있을까?
    // result = {
    // id: '랜덤생성 된 어쩌구'
    // name: '마우스'
    // description: '마우스 조아요',
    // price: 3000,
    //}
    return result;
  }

  async update({
    productId,
    updateProductInput,
  }: IproductsServiceUpdate): Promise<Product> {
    // 기존 데이터 가져오기
    // 기존에 있는 findOne을 재사용하여 로직을 통일하자
    const product = await this.findOne({ productId });
    // 검증은 서비스에서 하자
    this.checkSoldout({ product });

    // this.productsRepository.create // DB 접속이랑 관련이 없다 등록을 위한 빈 객체를 만들기 위함
    // this.productsRepository.insert // 결과를 객체로 못 돌려받는 등록 방법
    // this.productsRepository.update // 결과를 객체로 못 돌려받는 수정 방법

    const result = this.productsRepository.save({
      ...product, // 수정 후 수정 안된 다른 결과값까지 모두 객체로 돌려받고 싶을때
      ...updateProductInput,
    });
    return result;
  }

  // checkSoldout을 함수로 만드는 이유 => 수정, 삭제 등등 모두 같은 검증 로직을 사용
  checkSoldout({ product }: IProductsServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다!');
    }
    // 위의 구문과 같으므로 주석처리
    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다!',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }

  async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
    // 1. 실제 삭제
    // const result = await this.productsRepository.delete({ id: productId });
    // return result.affected ? true : false;

    // 2. 소프트 삭제 - isDeleted (직접 구현)
    // this.productsRepository.update({ id: productId }, { isDeleted: true });

    // 3. 소프트 삭제 - deletedAt (직접 구현)
    // this.productsRepository.update(
    //   { id: productId },
    //   { deletedAt: new Date() });

    // 4. 소프트삭제 (TypeORM 제공) - softRemove
    // this.productsRepository.softRemove({ id: productId });
    // 단점 : id로만 삭제 가능하다.
    // 장점 : 배열을 이용해서 여러 아이디를 한번에 지울 수 있다.
    // this.productsRepository.softRemove([{id: productId1},{id: productId2},{id: productId3}])

    // 5. 소프트삭제 (TypeORM 제공) - softDelete
    const result = await this.productsRepository.softDelete({ id: productId });
    return result.affected ? true : false;
    // 단점 : 여러 아이디를 한번에 지울 수 없다.
    // 장점 : id뿐만 아니라 다른 컬럼으로도 삭제 가능하다.
  }
}

interface IProductsServiceDelete {
  productId: string;
}

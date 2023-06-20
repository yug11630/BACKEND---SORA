import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
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
}

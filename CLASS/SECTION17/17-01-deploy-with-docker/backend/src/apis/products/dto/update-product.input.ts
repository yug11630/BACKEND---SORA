import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  // 아래 내용들을 상속 받음
  // name?: string
  // description?: string
  // price?: number
  //
  //   상속 받아서 해결 하므로 필요 없어졌다
  //   @Field(() => String, { nullable: true })
  //   name?: string;
  //   @Field(() => String, { nullable: true })
  //   description?: string;
  //   @Min(0)
  //   @Field(() => Int, { nullable: true })
  //   price?: number;
}

// PickType(CreateProductInput, ['name', 'price']); => 고르기
// OmitType(CreateProductInput, ['description']);   => 빼기
// PartialType(CreateProductInput); // ? (있어도 되고 없어도 된다) 상태로 만든다

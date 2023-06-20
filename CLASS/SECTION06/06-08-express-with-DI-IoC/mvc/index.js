// const express = require('express') // 과거 방식 => commonjs 방식
import express from 'express' // 위와 동일하나 이 방식이 최신 방식 => module 방식
import { ProductController } from './mvc/controllers/product.controller.js'
import { CouponController } from './mvc/controllers/coupon.controller.js' 
import { ProductService } from './mvc/controllers/services/product.services.js';
import { CashService } from './mvc/controllers/services/cash.services.js';

const app = express()

const productService = new ProductService()
const cashService = new CashService()

                                             // 의존성 주입으로 발생하는 장점
// const productService = new ProductService()  // new 한번으로 모든 곳에서 재사용 가능 (싱글 톤 패턴)
// const cashService = new CashService()        // 의존성 주입으로 한 번에 변경 가능
                                             // [부가설명]
                                             // 1. ProductController가 CashService에 의존하고 있다
                                             // => 이러한 상황을 "강하게 결합되어있다" 라고 표현 [tight - coupling]

                                             // 2. 이를 개선하기 위해 느슨한 결합으로 변경 할 필요가 있다. [loose - coupling]
                                             // => 의존성 주입으로 해결 (줄여서 DI)
                                             // 이 역할을 대신 해주는 Nestjs 도구 = IoC 컨테이너 

                                             // 3. 의존성 주입으로 싱글 톤 패턴 구현 가능
                                             // => 의존성 주입이면 꼭 싱글 톤 패턴은 아니다!
// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct);
app.post("/products/refund", productController.refundProduct);

// 쿠폰 API
const couponController = new CouponController(cashService);
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!");
});
// const express = require('express') // 과거 방식 => commonjs 방식
import express from 'express' // 위와 동일하나 이 방식이 최신 방식 => module 방식
import { ProductController } from './mvc/controllers/product.controller.js'
import { CouponController, CouponController } from './mvc/controllers/coupon.controller.js' 
const app = express()

// 상품 API
const productController = new ProductController()
app.post("/products/buy", productController.buyProduct) // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct) // 상품 환불하기 API

// 쿠폰 API
const couponController = new CouponController()
app.post("/coupons/buy", couponController.buyCoupon) // 상품권 구매하기 API


app.listen(3000) // 3000 : 포트 번호, listen : 기다린다 라는 뜻
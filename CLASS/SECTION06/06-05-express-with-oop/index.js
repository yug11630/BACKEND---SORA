// const express = require('express') // 과거 방식 => commonjs 방식
import express from 'express' // 위와 동일하나 이 방식이 최신 방식 => module 방식
import { CashService } from './cash.js'
import { ProductService } from './product.js'

const app = express()

// 상품 구매하기 API
app.post('/products/buy', (req, res) => { 
  // 1. 소지금을 검증하는 코드 
  const cashService = new CashService()
  const hasMoney = cashService.checkValue()

  // 2. 판매여부 검증하는 코드 ()
  const productService = new ProductService()
  const isSoldout = productService.checkSoldout()

  // 3. 상품 구매하는 코드
  if(hasMoney && !isSoldout) {
    res.send("상품 구매 완료!")
  }
}) 

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 ()
  const productService = new ProductService()
  const isSoldout = productService.checkSoldout()

  // 2. 상품 환불하는 코드
  if(isSoldout) {
    res.send("상품 환불 완료!")
  }
}) 

app.listen(3000) // 3000 : 포트 번호, listen : 기다린다 라는 뜻
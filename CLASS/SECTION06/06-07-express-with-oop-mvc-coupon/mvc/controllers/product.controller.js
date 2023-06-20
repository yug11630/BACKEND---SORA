import { CashService } from './services/product.cash.js'
import { ProductService } from './services/product.services.js'

export class ProductController {
    buyProduct = (req, res) => { 
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
      }

    refundProduct = (req, res) => {
        // 1. 판매여부 검증하는 코드 ()
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout()
      
        // 2. 상품 환불하는 코드
        if(isSoldout) {
          res.send("상품 환불 완료!")
        }
      }
}
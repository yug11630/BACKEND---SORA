import { CashService } from './services/product.cash.js'
import { ProductService } from './services/product.services.js'

export class ProductController {
  constructor(cashService, productService) {
    this.cashService = cashService;
    this.productService = productService;
  }

    buyProduct = (req, res) => { 
        // 1. 소지금을 검증하는 코드 
        const hasMoney = this.cashService.checkValue();
      
        // 2. 판매여부 검증하는 코드 ()
        // const productService = new ProductService()
        const isSoldout = this.productService.checkSoldout();
      
        // 3. 상품 구매하는 코드
        if(hasMoney && !isSoldout) {
          res.send("상품 구매 완료!")
        }
      }

    refundProduct = (req, res) => {
        // 1. 판매여부 검증하는 코드 ()
        // const productService = new ProductService()
        const isSoldout = this.productService.checkSoldout();
      
        // 2. 상품 환불하는 코드
        if(isSoldout) {
          res.send("상품 환불 완료!")
        }
      }
}
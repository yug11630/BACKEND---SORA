import { CashService } from './services/cash.services.js'

export class CouponController {
  constructor(cashService) {
    this.cashService = cashService;
  }


    buyCoupon = (req, res) => {
        // 1. 소지금을 검증하는 코드
        // const cashService = new CashService()
        const hasMoney = this.cashService.checkValue();

        // 2. 상품권을 구매하는 코드
        if(hasMoney) {
            res.send("상품권 구매 완료!")
          }
        }
    }
import coolsms from 'coolsms-node-sdk'
import dotenv from "dotenv";
dotenv.config();

const mysms = coolsms.default

//퍼사드 패턴
export function checkPhone(pNum) {
    // 1. 휴대폰번호 자릿수 맞는지 확인하기(10자리~11자리)
    if(pNum.length < 10 || pNum.length > 11){coolsms-node-sdk
        console.log("님 폰 번호 몰 ? 루 ㅇ ? ㅅ ㅇ");
        return false;
    } else {
        return true;
    }
}

export function getToken() {
    // 2. 인증번호 6자리 만들기
    const result = String(Math.floor(Math.random()* 1000000)).padStart(6, "0");
    console.log("결과다 뇨속아 = ㅅ =)~   " + result);
    return result;
}

export async function sendSms(pNum, result) {
    const SMS_KEY = process.env.SMS_KEY // 본인의 Coolsms API Key 입력
    const SMS_SECRET = process.env.SMS_SECRET // 본인의 Coolsms API Secret 입력
    const SMS_SENDER = process.env.SMS_SENDER

    // 3. 문자전송
    const messageService = new mysms(SMS_KEY, SMS_SECRET)
    const res = await messageService.sendOne({
        to : pNum,
        from : SMS_SENDER,
        text : `[뀨잉뀨잉] 안녕하세요 요청하신 
                인증 번호는" ${result} 입니다.`
    })
    // console.log( pNum + "로 인증번호 " + result + "를 전송합니다.");
    console.log(res)
}

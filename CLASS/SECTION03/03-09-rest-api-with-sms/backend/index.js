// const express = require('express') // 과거 방식 => commonjs 방식
import express from 'express' // 위와 동일하나 이 방식이 최신 방식 => module 방식
import {checkPhone, getToken, sendSms} from './phone.js' // export 가져오기
// import NAME(Name은 자유롭게 가져올 수 있다) from 'express'  // export default 가져오기

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {options} from './swagger/config.js';
import cors from 'cors'

const swaggerSpec  = swaggerJsdoc(options);

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/boards', function (req, res) { // app.get : get 방식의 API를 만들겠다 END-POINT는 '/'
  // 1. DB에 접속 후 데이터를 조회 => 데이터를 조회했다 가정
  const result = [
    { number : 1, writer : "뀨잉", title : "뀨잉이 등장~", contenst : "하이하이"},
    { number : 2, writer : "뀨앙", title : "뀨앙이도 등장~", contenst : "ㅋㅋ"},
    { number : 3, writer : "뀨돌", title : "뀨돌이는 안 등장~", contenst : "ㅠㅠ"},
  ]

  // 2. DB에서 꺼내 온 결과를 브라우저에 응답 (response)
  res.send(result) // 미들웨어 함수
}) 

app.post('/boards', function (req, res) { // app.get : get 방식의 API를 만들겠다 END-POINT는 '/'
  // 1. 브라우저에서 보낸 데이터 확인
  console.log(req)
  console.log("======================")
  console.log(req.body)

  // 2. DB 접속 후 데이터 저장 => 데이터 저장했다 가정

  // 3. DB에 저장된 결과를 브라우저에 응답 (response)
  res.send('게시물 등록에 성공하였습니다.') // 미들웨어 함수
}) 

app.post("/tokens/phone", function(req, res){
  const pNum = req.body.pNum

  // 1. 휴대폰번호 자릿수 맞는지 확인하기 (10~11자리)
  if(!checkPhone(pNum)) return

  // 2. 핸드폰 토큰 6자리 만들기
  const myToken = getToken();
  sendSms(pNum, myToken);

  //3. 결과알림
  res.send("인증완료!");
})

app.listen(3000) // 3000 : 포트 번호, listen : 기다린다 라는 뜻
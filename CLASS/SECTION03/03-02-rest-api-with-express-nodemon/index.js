// const express = require('express') // 과거 방식 => commonjs 방식
import express from 'express' // 위와 동일하나 이 방식이 최신 방식 => module 방식

const app = express()

app.get('/AAA', function (req, res) { // app.get : get 방식의 API를 만들겠다 END-POINT는 '/'
  res.send('Hello World02') // 미들웨어 함수
}) 

app.listen(3000) // 3000 : 포트 번호, listen : 기다린다 라는 뜻
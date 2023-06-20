# 0. 운영체제 및 프로그램 설치 (하나씩 입력해서 설치하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치 (이미 설치되어있는 컴퓨터를 다운로드 하는 방식)
FROM node:14

# 폴더 생성
RUN mkdir myfolder
# 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 내부로 복사하기
COPY ./index.js /myfolder/index.js
# 폴더 내부로 이동
RUN cd myfolder
# 도커 내부에서 파일 실행
# RUN node index.js
CMD node /myfolder/index.js
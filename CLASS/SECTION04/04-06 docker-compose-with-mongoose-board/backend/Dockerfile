# 0. 운영체제 및 프로그램 설치 (하나씩 입력해서 설치하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치 (이미 설치되어있는 컴퓨터를 다운로드 하는 방식)
FROM node:14

# 폴더 생성
RUN mkdir myfolder

# 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 내부로 복사하기
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/

# 폴더 내부로 이동
# RUN cd ./myfolder/
# WORKDIR /myfolder/
# RUN yarn install

# 도커 내부에서 파일 실행
# RUN node index.js
CMD yarn start

# 도커 실행하기
# docker build .
# docker images
# docker run 42ef9a96384d
# docker run -p 2500:3000 42ef9a96384d => 포트 포워딩 방식

# 도커 종료하기
# docker ps => CONTAINER ID 확인
# docker stop CONTAINER ID

# 도커 삭제하기
# docker ps -a => 종료된 컴퓨터 목록
# docker rm CONTAINER ID
# docker ps -a -q => 모든 CONTAINER ID 불러오기
# docker rm `docker ps -a -q` => ``으로 묶은 명령어는 먼저 실행한다 => 전체삭제

# 도커 이미지 삭제
# docker rmi 이미지 ID
# docker rmi `docker images - q`

# 전체 삭제
# docker prune -a
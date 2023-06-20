import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

@Injectable({ scope: Scope.DEFAULT }) //인젝션 - 스코프 : 싱글 톤(new 한 번)으로 할래?
export class BoardsService {
  findAll(): Board[] {
    // 1. DB에 접속 후 데이터를 조회 => 데이터를 조회했다 가정
    const result = [
      {
        number: 1,
        writer: '뀨잉',
        title: '뀨잉이 등장~',
        contents: '하이하이',
      },
      { number: 2, writer: '뀨앙', title: '뀨앙이도 등장~', contents: 'ㅋㅋ' },
      {
        number: 3,
        writer: '뀨돌',
        title: '뀨돌이는 안 등장~',
        contents: 'ㅠㅠ',
      },
    ];

    // 2. DB에서 꺼내 온 결과를 브라우저에 응답 (response)
    return result;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    // 1. 브라우저에서 보낸 데이터 확인
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    // 2. DB 접속 후 데이터 저장 => 데이터 저장했다 가정

    // 3. DB에 저장된 결과를 브라우저에 응답 (response)
    return '게시물 등록에 성공하였습니다.';
  }
}

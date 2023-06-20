import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT }) //인젝션 - 스코프 : 싱글 톤(new 한 번)으로 할래?
export class BoardsService {
  getHello(): string {
    return 'Hello World!';
  }
}

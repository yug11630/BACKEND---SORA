import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';

@EventSubscriber() // 트리거라는 것을 알려준다.
export class ProductSubscriber implements EntitySubscriberInterface {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this); // 클래스에서 자기 자신 = this
  }

  listenTo() {
    return Product;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log(event); // event.entity.price, event.entity.isSoldout, ...

    const id = event.entity.id;
    const name = event.entity.name;
    const description = event.entity.description;
    const price = event.entity.price;
    const isSoldout = event.entity.isSoldout;

    console.log(`${id} ${name} ${description} ${price} ${isSoldout}`); // 빅 쿼리나 엘라스틱 서치에 담기

    // 1. 트리거는 언제 사용하면 안될까?
    // 트랜잭션으로 연결된 중요한 내용들에는 사용 권장 X (메인 기능에는 사용X)

    // 2. 어떤 것들을 사용하면 좋을까?
    // 메인 로직에 큰 피해를 안 끼치며 도움을 주는 로직들 (통계 계산하기(.count() 비효율적), 로그 기록하기)
  }
}

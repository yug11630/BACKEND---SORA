import { ConflictException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';

// 나만의 데이터베이스 만들기
class MockUsersRepository {
  mydb = [
    { email: 'test@test.com', password: '0000', name: '뀨앙', age: 8 },
    { email: 'ABC@ABC.com', password: '1234', name: '뀨돌', age: 12 },
  ];

  findOne({ where }) {
    const users = this.mydb.filter((el) => el.email === where.email);
    if (users.length) return users[0];
    return null;
  }

  save({ email, password, name, age }) {
    this.mydb.push({ email, password, name, age });
    return { email, password, name, age };
  }
}

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const usersModule = await Test.createTestingModule({
      // imports: [TypeOrmModule...],
      // controllers: [],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: MockUsersRepository,
        },
      ],
    }).compile();

    usersService = usersModule.get<UsersService>(UsersService);
  });

  //   describe('findOneByEmail', () => {
  //     const result = usersService.findOneByEmail({ email: 'test@test.com' });
  //     expect(result).toStrictEqual({ // toStrictEqual 객체와 객체를 비교할 때 사용
  //         email: 'test@test.com',
  //         name: '짱구',
  //         ...
  //     })
  //   });

  describe('create', () => {
    it('이미 존재하는 이메일 검증하기', async () => {
      const myData = {
        email: 'test@test.com',
        password: '1234',
        name: '뀨잉',
        age: 13,
      };

      try {
        await usersService.create({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
        // expect(error).toBeInstanceOf(UnprocessableEntityException); // 알맞은 에러로 잘 작동하는지에 대한 확인 용도이다.
      }
    });

    it('회원 등록이 잘 되었는지에 대한 검증', async () => {
      const myData = {
        email: 'EFG@EFG.com',
        password: '1234',
        name: '철수',
        age: 13,
      };

      const result = await usersService.create({ ...myData });
      const { password, ...rest } = result;
      expect(rest).toStrictEqual({
        email: 'EFG@EFG.com',
        name: '철수',
        age: 13,
      });
    });
  });
});

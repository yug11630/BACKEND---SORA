import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
} from './interfaces/auth-service.interface';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,

    private readonly usersService: UsersService, //
  ) {}

  // 로그인 함수
  async login({ email, password }: IAuthServiceLogin): Promise<string> {
    // 유저 이메일 데이터가 DB에 있는지 확인
    const user = await this.usersService.findOneByEmail({ email });

    if (!user)
      throw new UnprocessableEntityException('해당 이메일이 없습니다.');

    // 유저 비밀번호가 일치하는지 확인
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth)
      throw new UnprocessableEntityException('비밀번호가 틀렸습니다.');

    // 4. 이메일과 비밀번호가 모두 일치할 때
    // => accessToken(=JWT)을 만들어서 브라우저에 전달하기
    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id },
      { secret: '나의 비밀번호', expiresIn: '1h' },
    );
  }
}

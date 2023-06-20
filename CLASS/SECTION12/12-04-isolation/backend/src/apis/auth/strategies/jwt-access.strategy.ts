import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// import { KakaoStrategy } from 'passport-kakao';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      // super : 부모인 PassportStrategy의 constructor에 값을 보낸다
      // token 직접 뽑아오는 방법 : ExtractJwt.fromAuthHeaderAsBearerToken()와 동일
      // jwtFromRequest: (req) => {
      //     console.log(req);
      //     const temp = req.headers.Authorization; // Bearer sdaklfjqlkwjfkljas
      //     const accessToken = temp.toLowercase().replace('bearer ', '');
      //     return accessToken;
      //   },
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // accessToken
      secretOrKey: '나의 비밀번호',
      // 비밀번호, 만료시간 검증
    });
  }

  validate(payload) {
    console.log(payload); // { sub: 유저ID }
    return {
      id: payload.sub,
    };
  }
}

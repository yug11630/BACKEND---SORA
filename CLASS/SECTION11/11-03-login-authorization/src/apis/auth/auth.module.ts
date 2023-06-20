import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule, // UsersModule 한번에 불러오기
  ],

  providers: [
    JwtAccessStrategy,
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModule {}

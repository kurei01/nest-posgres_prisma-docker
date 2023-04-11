import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return {
      msg: 'sign in success',
    };
  }

  signup() {
    return {
      msg: 'sign up success',
    };
  }
}

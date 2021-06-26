import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 获取接口设置的roles的值
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('roles = ', roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const headers = request.headers;
    const list = [];
    list.push(headers.roles);
    const hasRole = () => list.some((role) => roles.includes(role));
    return headers && list && hasRole();
  }
}

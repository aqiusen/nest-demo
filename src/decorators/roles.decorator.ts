import { SetMetadata } from '@nestjs/common';
/**
 * @param roles 这种方法更简洁、更易读，而且是强类型的。
 * 现在我们有了一个自定义的 @Roles() 装饰器，我们可以使用它来装饰 create()方法。
 * @returns
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

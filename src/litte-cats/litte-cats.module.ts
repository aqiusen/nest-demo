import { Global, Module } from '@nestjs/common';
import { CatsModule } from '../cats/cats.module';
import { LitteCatsService } from './litte-cats.service';
import { LitteCatsController } from './litte-cats.controller';

/**
 * 如果这里导入的是CatsModule，那么LitteCatsController中就能直接通过构造函数获取CatsModule中导出的Service了：
 * @Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
 export class CatsModule {}

 如果直接设置为Global，并且通过exports导出，那在Cats模块中可以直接用到这个service
 设置model全局，并且导出了其中的service
 * */
@Global()
@Module({
  imports: [],
  providers: [LitteCatsService],
  controllers: [LitteCatsController],
  exports: [LitteCatsService],
})
export class LitteCatsModule {}

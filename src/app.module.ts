import { Module } from '@nestjs/common';
import { UserModule } from './features/user/user.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

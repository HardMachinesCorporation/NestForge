import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import { AppDataSource } from './data-source';
import { schemaValidation } from './config/config.shema.validation';

@Module({
    imports: [ConfigModule.forRoot({isGlobal: true, envFilePath: '.env', validationSchema:schemaValidation}),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: () => AppDataSource.options
    })],
})
export class DatabaseModule {}

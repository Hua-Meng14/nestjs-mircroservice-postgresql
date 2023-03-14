import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './items/item.entity';
import { ItemRepository } from './items/item.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      // username: process.env.POSTGRES_USERNAME,
      // password: process.env.POSTGRES_PASSWORD,
      username: 'postgres',
      password:'123',
      database: process.env.POSTGRES_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([ItemEntity])
  ],
  controllers: [AppController],
  providers: [AppService, ItemRepository],
})
export class AppModule { }

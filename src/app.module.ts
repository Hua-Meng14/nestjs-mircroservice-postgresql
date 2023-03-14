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
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'item',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([ItemRepository, ItemEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

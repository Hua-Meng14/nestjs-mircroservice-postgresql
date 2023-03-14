import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Microservice');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
  });
  logger.log('Microservice is listening...')
  await app.listen();
}

bootstrap();

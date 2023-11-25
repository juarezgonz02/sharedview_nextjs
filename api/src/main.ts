import { NestFactory } from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import {config} from 'dotenv';

config();

const port = parseInt(process.env.API_PORT) || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: `${process.env.APP_PROTOCOL}://${process.env.APP_DOMAIN}:${process.env.APP_PORT}`
  });

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Shared View')
    .setDescription('')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true}));

  await app.listen(port);
}
bootstrap();

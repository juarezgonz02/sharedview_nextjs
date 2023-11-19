import { NestFactory } from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {config} from 'dotenv';

config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Shared View')
    .setDescription('')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true}));

  if(process.env.NODE_ENV !== 'production'){

    SwaggerModule.setup('docs', app, document);
  }

  console.log('MODE', process.env.NODE_ENV)

  await app.listen(3000);
}
bootstrap();

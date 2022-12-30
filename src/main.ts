import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // para solo traer los campos que espero en la request
      forbidNonWhitelisted: true, // regresar errores si envia campos que no necesito en mis endpoints
    }),
  )

  await app.listen(3000);
}
bootstrap();

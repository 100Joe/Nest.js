import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  // Creates a Nest application by using the root file and then starting server 3000.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

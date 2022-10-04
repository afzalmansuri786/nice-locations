import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import {  join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const APP_DIRECTORY = join(__dirname,'..')
  console.log("check 8");
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.setViewEngine('hbs')
  app.setBaseViewsDir(join(APP_DIRECTORY,'views'));
  app.useStaticAssets(join(APP_DIRECTORY, 'public'))
  await app.listen(3000);
}
bootstrap();

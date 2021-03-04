import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { controllers } from './controllers';
import { services } from './services';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: controllers,
  providers: services,
})
export class AppModule {}

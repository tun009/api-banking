/* eslint-disable prettier/prettier */
import { ICBModule } from '../../../packages/nest-banking/icb/icb.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    ICBModule.forRoot({
      baseUrl: 'https://api-ipay.vietinbank.vn',
      auth: {
        username: 'your_username',
        access_code: 'your_access_code',
        id_number: 'your_id_number',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
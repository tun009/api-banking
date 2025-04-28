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
        username: '0981273158',
        access_code: 'Th28092002',
        id_number: '108882919487',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
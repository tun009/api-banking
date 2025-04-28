import { Injectable } from '@nestjs/common';
import { ICBService } from '../../../packages/nest-banking/icb/icb.service';

@Injectable()
export class AppService {
  constructor(private ICBService: ICBService) {}
  async getBalance() {
    try {
      const data = await this.ICBService.getTransactions({});
      console.log('data', data);
      return data;
    } catch (error) {
      console.log('error', error?.response);
      throw new Error('Failed to fetch transactions');
    }
  }
  getHello(): string {
    return 'Hello World!';
  }
}

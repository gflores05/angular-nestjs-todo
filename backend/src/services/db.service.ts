import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';

@Injectable()
export class DbService {
  constructor(private configService: ConfigService) {}

  getClient() {
    return new Client({
      user: this.configService.get<string>('DATABASE_USER'),
      host: this.configService.get<string>('DATABASE_HOST'),
      database: this.configService.get<string>('DATABASE_NAME'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      port: this.configService.get<number>('DATABASE_PORT')
    });
  }
  
  async query<T>(query, params = null): Promise<T[]> {

    const client = this.getClient();

    client.connect();

    const result = await client.query<T>(query, params);

    await client.end();

    return result.rows;
  }

  async exec(statement: string, params = null): Promise<void> {
    const client = this.getClient();

    client.connect();

    await client.query(statement, params);

    await client.end();
  }
}

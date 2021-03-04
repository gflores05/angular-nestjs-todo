import { DbService } from "./db.service";
import { Injectable } from '@nestjs/common';
import { Model } from "../models/model";

@Injectable()
export class ModelService<T extends Model>{
  protected tableName: string;
  protected fields: string[];

  constructor(private dbService: DbService) {}

  async findAll(): Promise<T[]> {
    const select = this.fields.join(',');
    const query = `SELECT ${select} FROM ${this.tableName}`;
    const rows = await this.dbService.query<T>(query);

    return rows;
  }

  async findById(id: number): Promise<T> {
    const select = this.fields.join(',');
    const query = `SELECT ${select} FROM ${this.tableName} WHERE id = $1`;
    const rows = await this.dbService.query<T>(query, [id]);

    return rows[0];
  }

  async insert(obj: T) {

    const fields = this.fields.filter(f => f !== 'id')
  
    const insertFields = fields.join(',');
    const insertValues = fields.map((f, i) => `$${i+1}`).join(',');
    const values = fields.map(f => obj[f]);

    const statement = `INSERT INTO ${this.tableName}(${insertFields}) VALUES (${insertValues})`;

    await this.dbService.exec(statement, values);
  }

  async update(obj: T) {

    const fields = this.fields.filter(f => f !== 'id')
  
    const updateFields = fields.map((f, i) => `${f} = $${i+1}`).join(',');
    const values = fields.map(f => obj[f]);

    values.push(obj.id);

    const statement = `UPDATE ${this.tableName} SET ${updateFields} WHERE id = $${values.length}`;

    await this.dbService.exec(statement, values);
  }

  async delete(id: number) {
    await this.dbService.exec(`DELETE FROM ${this.tableName} WHERE id=$1`, [id]);
  }
}

import { inject, injectable } from 'tsyringe';
import { Action } from '../../entities/Action';
import { IActionsRepository } from '../IActionsRepository';
import { action } from '../../../../db/schema';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { ICreateAction } from '../../dtos/ICreateAction';
import { sql } from 'drizzle-orm';

@injectable()
class ActionRepository implements IActionsRepository {
  constructor(
    @inject('db') private database: PostgresJsDatabase
  ) {}
  
  async createAction({ id, title }: ICreateAction): Promise<void> {
    await this.database.insert(action).values({ id, title });
  }

  async getActions(): Promise<Action[]> {
    const actions = await this.database.select().from(action);

    return actions;
  }

  async getActionById(id: string): Promise<Action> {
    const actionReturn = await this.database.select().from(action).where(sql`${action.id} = ${id}`);

    return actionReturn[0];
  }
}

export { ActionRepository };
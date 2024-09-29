import { ICreateAction } from '../dtos/ICreateAction';
import { Action } from '../entities/Action';

interface IActionsRepository {
  createAction({ id,title }: ICreateAction): Promise<void>
  getActions(): Promise<Action[]>
  getActionById(id: string): Promise<Action>
}
export { IActionsRepository };
import {  inject, injectable } from 'tsyringe';
import { Action } from '../../entities/Action';
import { IActionsRepository } from '../../repositories/IActionsRepository';

@injectable()
class GetActionUseCase {
  constructor(
    @inject('ActionRepository') private actionRepository: IActionsRepository
  ) {}

  async execute(): Promise<Action[]> {
    const actions = await this.actionRepository.getActions();

    return actions;
  }
}

export { GetActionUseCase };
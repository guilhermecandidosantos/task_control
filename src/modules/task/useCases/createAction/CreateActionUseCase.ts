import { inject, injectable } from 'tsyringe';
import { ICreateAction } from '../../dtos/ICreateAction';
import { IActionsRepository } from '../../repositories/IActionsRepository';

@injectable()
class CreateActionUseCase {
  constructor(
    @inject('ActionRepository') private actionRepository: IActionsRepository
  ) {}

  async execute({ id, title }: ICreateAction) {

    await this.actionRepository.createAction({ id, title });
  }
}

export { CreateActionUseCase };
import { inject, injectable } from 'tsyringe';
import { ICreateTask } from '../../dtos/ICreateTask';
import { ITaskRepository } from '../../repositories/ITaskRepository';

@injectable()
class CreateTaskUseCase {
  constructor(
    @inject('TaskRepository') private taskRepository: ITaskRepository
  ) {}

  async execute({ id, title,description }: ICreateTask): Promise<void> {
    await this.taskRepository.createTask({ id, title, description });
  }
}

export { CreateTaskUseCase };
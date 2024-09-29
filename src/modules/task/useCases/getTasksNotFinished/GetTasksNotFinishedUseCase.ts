import { inject, injectable } from 'tsyringe';
import { Task } from '../../entities/Task';
import { ITaskRepository } from '../../repositories/ITaskRepository';

@injectable()
class GetTasksNotFinishedUseCase {
  constructor(
    @inject('TaskRepository') private taskRepository: ITaskRepository
  ) {}

  async execute(): Promise<Task[]> {
    const tasks = await this.taskRepository.getTasksNotFinished();

    return tasks;
  }
}

export { GetTasksNotFinishedUseCase };
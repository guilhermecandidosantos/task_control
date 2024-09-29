import { inject, injectable } from 'tsyringe';
import { ITaskRepository } from '../../repositories/ITaskRepository';
import { IEditTask } from '../../dtos/IEditTask';
import { Task } from '../../entities/Task';

@injectable()
class EditTaskUseCase {
  constructor(
    @inject('TaskRepository') private taskRepository: ITaskRepository
  ) {}

  async execute({ taskId, title, description }: IEditTask): Promise<Task> {
    const updatedTask = await this.taskRepository.editTask({ taskId, title, description });

    return updatedTask;
  }

}

export { EditTaskUseCase };
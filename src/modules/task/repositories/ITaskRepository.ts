import { IAddActionOnTask } from '../dtos/IAddActionOnTask';
import { ICreateTask } from '../dtos/ICreateTask';
import { IEditTask } from '../dtos/IEditTask';
import { Task } from '../entities/Task';

interface ITaskRepository {
  createTask({ id,title,description }: ICreateTask): Promise<void>
  getTaskById(id: string): Promise<Task>
  addActionOnTask({ id, taskId, actionId }: IAddActionOnTask): Promise<void>
  getTasksNotFinished(): Promise<Task[]>
  getTasksFinished(): Promise<Task[]>
  editTask({ taskId, title, description }: IEditTask): Promise<Task>
  getAllTasks(): Promise<Task[]>
}

export { ITaskRepository };
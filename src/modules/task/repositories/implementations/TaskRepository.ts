import { inject, injectable } from 'tsyringe';
import { ICreateTask } from '../../dtos/ICreateTask';
import { Task } from '../../entities/Task';
import { ITaskRepository } from '../ITaskRepository';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { task, taskAction } from '../../../../db/schema';
import { eq, isNotNull, isNull } from 'drizzle-orm';
import { IAddActionOnTask } from '../../dtos/IAddActionOnTask';
import { IActionsRepository } from '../IActionsRepository';
import { IEditTask } from '../../dtos/IEditTask';
import dayjs from 'dayjs';

@injectable()
class TaskRepository implements ITaskRepository {
  constructor(
    @inject('db') private database: PostgresJsDatabase,
    @inject('ActionRepository') private actionRepository: IActionsRepository
  ) {}

  async createTask({ id, title, description }: ICreateTask): Promise<void> {
    await this.database.insert(task).values({ id, title, description });
  }
  
  async getTaskById(id: string): Promise<Task> {
    const taskReturn = await this.database.select().from(task).where(eq(task.id, id));

    return taskReturn[0];
  }

  async addActionOnTask({ id, taskId, actionId }: IAddActionOnTask): Promise<void> {
    const actionExists = await this.actionRepository.getActionById(actionId);

    if(!actionExists) {
      throw new Error('Action not found');
    }

    const task = await this.getTaskById(taskId);

    if(!task) {
      throw new Error('Task not found');
    }

    await this.database.insert(taskAction).values({ id, taskId, actionId });
  }

  async getTasksNotFinished(): Promise<Task[]> {
    const tasks = await this.database.select().from(task).where(isNull(task.finishedAt));

    return tasks;
  }
  
  async getTasksFinished(): Promise<Task[]> {
    const tasks = await this.database.select().from(task).where(isNotNull(task.finishedAt));

    return tasks;
  }
  
  async editTask({ taskId, title, description }: IEditTask): Promise<Task> {
    const updatedAt = dayjs().unix();

    const taskReturn = await this.database.update(task)
      .set({ title, description, updatedAt })
      .where(eq(task.id, taskId)).returning();

    return taskReturn[0];
  }

  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.database.select().from(task);

    return tasks;
  }
}

export { TaskRepository };
import { container } from 'tsyringe';
import { db } from '../../db';
import { ActionRepository } from '../../modules/task/repositories/implementations/ActionRepository';
import { IActionsRepository } from '../../modules/task/repositories/IActionsRepository';
import { ITaskRepository } from '../../modules/task/repositories/ITaskRepository';
import { TaskRepository } from '../../modules/task/repositories/implementations/TaskRepository';

container.register(
  'db', { useValue: db }
);

container.registerSingleton<IActionsRepository>(
  'ActionRepository',
  ActionRepository
);

container.registerSingleton<ITaskRepository>(
  'TaskRepository',
  TaskRepository
);
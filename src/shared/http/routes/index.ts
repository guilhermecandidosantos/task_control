import { FastifyInstance } from 'fastify';
import { 
  GetActionsController 
} from '../../../modules/task/useCases/getAction/GetActionsController';
import { 
  CreateActionController 
} from '../../../modules/task/useCases/createAction/CreateActionController';
import { 
  CreateTaskController 
} from '../../../modules/task/useCases/createTask/CreateTaskController';
import { 
  GetTasksNotFinishedController 
} from '../../../modules/task/useCases/getTasksNotFinished/GetTasksNotFinishedController';
import {
   GetTasksFinishedController 
} from '../../../modules/task/useCases/getTasksFinished/GetTasksFinishedController';
import { EditTaskController } from '../../../modules/task/useCases/editTask/EditTaskController';
import { 
  GetAllTasksController 
} from '../../../modules/task/useCases/getAllTasks/GetAllTasksController';

const getActionsController = new GetActionsController();
const createActionController = new CreateActionController();
const createTaskController = new CreateTaskController();
const getTasksNotFinishedController = new GetTasksNotFinishedController();
const getTasksFinishedController = new GetTasksFinishedController();
const editTaskController = new EditTaskController();
const getAllTasksController = new GetAllTasksController();

export async function Routes(route: FastifyInstance) {
  route.get('/actions', getActionsController.handle);

  route.post('/action', createActionController.handle);

  route.post('/task', createTaskController.handle);

  route.get('/tasks-not-finished', getTasksNotFinishedController.handle);

  route.get('/tasks-finished', getTasksFinishedController.handle);

  route.put('/task/:taskId', editTaskController.handle);

  route.get('/tasks', getAllTasksController.handle);
  
}
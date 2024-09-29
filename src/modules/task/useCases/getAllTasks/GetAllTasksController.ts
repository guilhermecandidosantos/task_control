import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import { GetAllTasksUseCase } from './GetAllTasksUseCase';

class GetAllTasksController {
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const getAllTasksUseCase = await container.resolve(GetAllTasksUseCase);

    try {
      const tasks = await getAllTasksUseCase.execute();

      return reply.code(200).send(tasks);
    } catch (error) {
      return reply.code(400).send({ message: `Get all tasks failed: ${error}` });
    }
  }
}

export { GetAllTasksController };
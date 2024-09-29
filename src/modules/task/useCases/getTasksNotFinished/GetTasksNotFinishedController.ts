import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import { GetTasksNotFinishedUseCase } from './GetTasksNotFinishedUseCase';

class GetTasksNotFinishedController {
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const getTasksNotFinishedUseCase = container.resolve(GetTasksNotFinishedUseCase);

    try {
      const tasks = await getTasksNotFinishedUseCase.execute();

      return reply.code(200).send(tasks);
    } catch (error) {
      return reply.code(400).send({ message: `Task request failed: ${error}` });
    }
  }
}

export { GetTasksNotFinishedController };
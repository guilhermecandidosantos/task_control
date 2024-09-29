import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import { GetTasksFinishedUseCase } from './GetTasksFinishedUseCase';

class GetTasksFinishedController {
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const getTasksFinishedUseCase = container.resolve(GetTasksFinishedUseCase);

    try {
      const tasks = await getTasksFinishedUseCase.execute();

      return reply.code(200).send(tasks);
    } catch (error) {
      return reply.code(400).send({ message: `Tasks request failed: ${error}` });
    }
  }
}

export { GetTasksFinishedController }; 
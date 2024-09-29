import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import { GetActionUseCase } from './GetActionsUseCase';

class GetActionsController {
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const getActionUseCase = container.resolve(GetActionUseCase);

    try {
      const actions = await getActionUseCase.execute();

      return reply.code(200).send(actions);
    } catch (error) {
      return reply.code(400).send({ message: `Get actions failed: ${error}` });
    };
  }
}

export { GetActionsController };
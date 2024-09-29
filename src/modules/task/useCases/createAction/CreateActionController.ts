import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import { CreateActionUseCase } from './CreateActionUseCase';
import z from 'zod';
import { v4 as uuid } from 'uuid';

class CreateActionController {
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const requestSchema = z.object({
      title: z.string()
    });

    const { title } = requestSchema.parse(request.body);
    try {
      const id = uuid();

      const createActionUseCase = container.resolve(CreateActionUseCase);

      await createActionUseCase.execute({ id, title });

      return reply.code(201).send({ message: 'Action create successfully' });
    } catch (error) {
      return reply.code(400).send({ message: `Action create failed: ${error}` });
    }
  }
}

export { CreateActionController };
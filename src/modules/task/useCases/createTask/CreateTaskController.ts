import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import { CreateTaskUseCase } from './CreateTaskUseCase';
import z from 'zod';
import { v4 as uuid } from 'uuid';

class CreateTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const requestSchema = z.object({
      title: z.string(),
      description: z.string()
    });

    const { title, description } = requestSchema.parse(request.body);
    const id = uuid();

    try {
      const createTaskUseCase = container.resolve(CreateTaskUseCase);
      
      await createTaskUseCase.execute({ id, title, description });

      return reply.code(201).send();
    } catch (error) {
      return reply.code(400).send({ message: `Create task failed: ${error}` });
    }
  }
}

export { CreateTaskController };
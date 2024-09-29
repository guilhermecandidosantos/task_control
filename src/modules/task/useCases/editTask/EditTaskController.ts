import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import z from 'zod';
import { EditTaskUseCase } from './EditTaskUseCase';

class EditTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyRequest> {
    const requestBodySchema = z.object({
      title: z.string(),
      description: z.string(),
    });

    const requestParamSchema = z.object({
      taskId: z.string()
    });

    const { title, description } = requestBodySchema.parse(request.body);
    const { taskId } = requestParamSchema.parse(request.params);

    const editTaskUseCase = container.resolve(EditTaskUseCase);

    try {
      const updatedTask = await editTaskUseCase.execute({ taskId, title, description });

      return reply.code(200).send(updatedTask);
    } catch (error) {
      return reply.code(400).send({ message: `Edit task failed: ${error}` });
    }
  }
}

export { EditTaskController };
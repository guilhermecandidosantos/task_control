import 'reflect-metadata';
import '../container';
import fastify from 'fastify';
import { Routes } from './routes';

const app = fastify();

const PORT = 3333;

app.register(Routes);

app.listen({
  port: PORT
}).then(() => {
  console.log(`Server running on ${PORT}`);
});


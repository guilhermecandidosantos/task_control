import { sql } from 'drizzle-orm';
import { varchar, pgTable, integer } from 'drizzle-orm/pg-core';

export const task = pgTable('task', {
  id: varchar('id', { length: 50 }).primaryKey(),
  title: varchar('title', { length: 100 }).notNull(),
  description: varchar('description', { length: 900 }).notNull(),
  createdAt: integer('created_at').notNull().default(sql`extract(epoch from now())`),
  updatedAt: integer('updated_at'),
  finishedAt: integer('finished_at'),
});

export const action = pgTable('action', {
  id: varchar('id', { length: 50 }).primaryKey(),
  title: varchar('title', { length: 100 }).notNull(),
  createdAt: integer('created_at').notNull().default(sql`extract(epoch from now())`),
});

export const taskAction = pgTable('task_action', {
  id: varchar('id', { length: 50 }).primaryKey(),
  taskId: varchar('task_id', { length: 100 }).notNull().references(() => {return task.id;}),
  actionId: varchar('action_id', { length: 50 }).notNull().references(() => {return action.id;}),
  description: varchar('description', { length: 500 }),
  file: varchar('file', { length: 500 }),
  initialDate: integer('initial_date'),
  finishDate: integer('finish_date'),
  totalHours: integer('total'),
});
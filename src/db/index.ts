import postgres from 'postgres';
import { env } from '../env';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

const client = postgres(env.DATABASE_URL);

const db = drizzle(client, { schema, logger: true  });

export { db, client };
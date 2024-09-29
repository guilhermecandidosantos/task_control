import dayjs from 'dayjs';
import { client, db } from '.';
import { action } from './schema';
import { v4 as uuid } from 'uuid';

async function seed() {
  await db.delete(action);

  const result = await db.insert(action).values([
    { id: uuid(), title: 'Analisar' },
    { id: uuid(), title: 'Codar' },
  ]);
  
}

seed().finally(() => {
  client.end();
});
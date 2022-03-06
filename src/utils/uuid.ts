import { v4 as uuidv4 } from 'uuid';

export const uuid = (): string => {
  const id = uuidv4();

  return `${id}`;
};

export const generateId = (): string => {
  const id = uuidv4();

  return `${id.split('-').pop() || ''}`;
};

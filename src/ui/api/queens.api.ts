import { RawQueen } from '@interfaces/Queen';

import { QUEENS_API_URL } from '../APP_CONFIG';

interface Response {
  date: string;
  queens: RawQueen[];
}

export const getQueensApi = async (): Promise<Response> => {
  try {
    const res = await fetch(`${QUEENS_API_URL}`);

    return (await res.json()) as Response;
  } catch (error) {
    return Promise.reject(error);
  }
};

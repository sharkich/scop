import { APP_PUBLIC_KEY } from '../../../APP_CONST';

export const getHash = async (data: string): Promise<string> => {
  const { createHmac } = await import('crypto');

  return createHmac('sha256', APP_PUBLIC_KEY).update(data).digest('hex');
};

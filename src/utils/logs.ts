// eslint-disable-next-line
// @ts-ignore
import { LCERROR } from '../APP_CONST';

export const log = (...args) => {
  // eslint-disable-next-line
  console.log(...args);
};

export const logError = (error: Error | unknown) => {
  // eslint-disable-next-line
  console.error(LCERROR, '🛑_🛑 Error:', error);
};

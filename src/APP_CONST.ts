import dotenv from 'dotenv';

import { defined } from '@utils/fp';

// eslint-disable-next-line import/no-named-as-default-member
dotenv.config();

export const LCERROR = '\x1b[31m%s\x1b[0m'; //red
export const LCWARN = '\x1b[33m%s\x1b[0m'; //yellow
export const LCINFO = '\x1b[36m%s\x1b[0m'; //cyan
export const LCSUCCESS = '\x1b[32m%s\x1b[0m'; //green

export const APP_QUEEN_PORT = process.env.PORT || 3021;

export const APP_PUBLIC_KEY = defined(process.env.PUBLIC_KEY, 'PUBLIC_KEY');
// eslint-disable-next-line no-console
console.log(LCSUCCESS, 'APP_PUBLIC_KEY', APP_PUBLIC_KEY);

export const APP_SALT = defined(process.env.APP_SALT, 'APP_SALT');
// eslint-disable-next-line no-console
console.log(LCSUCCESS, 'APP_SALT', APP_SALT);

// eslint-disable-next-line
// @ts-ignore
export const log = (...args) => {
  // eslint-disable-next-line
  console.log(...args);
};

export const logError = (error: Error | unknown) => {
  // eslint-disable-next-line
  console.error('🛑_🛑 Error:', error);
};

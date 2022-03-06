export const EMPTY_CHAR = '&zwnj;';

export const trimSpaces = (value: string) =>
  value
    .replace(/&nbsp;/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<');

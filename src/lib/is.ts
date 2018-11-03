const isNil = (value: any) => typeof value === 'undefined' || value === null;
const isFilledText = (value: any) =>
  typeof value === 'string' && value.length > 0;
const isFilled = (value: any) =>
  isFilledText(value) || (typeof value === 'number' && value > 0);
const isFunction = (value: any) => typeof value === 'function';

export const is = {
  Filled: isFilled,
  FilledText: isFilledText,
  Function: isFunction,
  Nil: isNil
};

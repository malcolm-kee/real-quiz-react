export const isNil = (value: any): value is undefined =>
  typeof value === 'undefined' || value === null;

export const isFilledText = (value: any): value is string =>
  typeof value === 'string' && value.length > 0;

export const isFilled = (value: any) =>
  isFilledText(value) || (typeof value === 'number' && value > 0);

export const isFunction = (value: any): value is Function =>
  typeof value === 'function';

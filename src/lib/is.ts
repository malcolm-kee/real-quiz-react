const isNil = (value: any) => typeof value === 'undefined' || value === null;
const isFilledText = (value: any) => typeof value === 'string' && value.length > 0;
const isFilled = (value: any) => isFilledText(value) || (typeof value === 'number' && value > 0);

export const is = {
  Filled: isFilled,
  FilledText: isFilledText,
  Nil: isNil
};

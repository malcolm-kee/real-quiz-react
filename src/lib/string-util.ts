import { is } from './is';

/**
 *
 * @param delimiter the delimiter to join the items
 * Utility to join string, the returned function will join the items with the provided delimiter
 * Only number and filled text will be included in the result
 */
export const joinString = (delimiter: string) => (
  ...items: Array<string | number | boolean | undefined | null>
) =>
  items
    .filter(item => typeof item === 'number' || is.FilledText(item))
    .join(delimiter);

/**
 * Utility to generate the className.
 * All params provided into the function will be joined, boolean value will be ignored, thus
 * you can use ternary expression for conditional class
 */
export const getClassName = joinString(' ');

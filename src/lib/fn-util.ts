import { isFunction } from 'typesafe-is';

export function noop() {
  // noop
}

export const callAll = <Param>(...fns: Array<(p: Param) => void>) => (
  p: Param
) => fns.filter(isFunction).forEach(fn => fn(p));

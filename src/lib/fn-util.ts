import { is } from './is';

export function noop() {
  // noop
}

export const callAll = <Param>(...fns: Array<(p: Param) => void>) => (
  p: Param
) => fns.filter(is.Function).forEach(fn => fn(p));

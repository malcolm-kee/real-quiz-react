import { useCallback, useState } from 'react';
import { noop, callAll } from '../lib/fn-util';

/**
 * Get the HTML attributes for an element to behave like a button
 * @param {Object} props all the props that you want to apply to the element
 * @returns {Object} all the props to be spread to the element
 */
export const getButtonProps = ({
  tabIndex = 0,
  onClick = noop,
  onKeyUp,
  ...props
}) => ({
  tabIndex,
  onClick,
  onKeyUp: callAll(
    onKeyUp,
    ev => (ev.key === 'Enter' || ev.key === ' ') && onClick(ev)
  ),
  ...props
});

/**
 * Get the function to invoke ajax and track its loading state
 * @param {(...any[]) => Promise<any>} ajax the ajax call to be invoked
 * @param {...any} params the parameters to be applied to the ajax call
 * @returns {{callAjax: () => Promise<any>, isLoading: boolean}}
 */
export const useAjax = (ajax, ...params) => {
  const [isLoading, setLoading] = useState(false);

  const callAjax = useCallback(
    () => {
      setLoading(true);
      return ajax(...params)
        .then(res => {
          setLoading(false);
          return res;
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
          throw err;
        });
    },
    [ajax, ...params]
  );

  return {
    callAjax,
    isLoading
  };
};

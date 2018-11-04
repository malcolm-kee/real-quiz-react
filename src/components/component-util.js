import { noop, callAll } from '../lib/fn-util';

/**
 * Get the HTML attributes for an element to behave like a button
 * @param {Object} props all the props that you want to apply to the element
 * @returns {Object} all the props to be spread to the element
 */
export const getButtonProps = ({
  tabIndex = 0,
  onClick = noop,
  onKeyUp = noop,
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

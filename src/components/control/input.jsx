import React from 'react';
import { useFieldControl } from './field';
import './input.scss';

export const Input = React.forwardRef((props, ref) => {
  const { getClassName, controlProps } = useFieldControl(props);

  const { className, onChangeValue, ...restProps } = props;

  return (
    <input
      className={getClassName('input')}
      {...restProps}
      {...controlProps}
      ref={ref}
    />
  );
});

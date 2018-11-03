import React from 'react';
import { useFieldControl } from './field';
import './input.scss';

interface IInputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {
  onChangeValue: (value: string) => void;
}
export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    const { getClassName, controlProps } = useFieldControl(props as any);

    const { className, onChangeValue, ...restProps } = props;

    return (
      <input
        className={getClassName('input')}
        {...restProps}
        {...controlProps}
        ref={ref}
      />
    );
  }
);

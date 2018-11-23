import * as React from 'react';
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
  (props, ref) => (
    <input {...useFieldControl(props as any, 'input')} ref={ref} />
  )
);

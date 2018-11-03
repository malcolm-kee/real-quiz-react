import * as React from 'react';
import { getClassName } from '../../lib/string-util';
import './button.scss';

interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  icon?: boolean;
  raised?: boolean;
}
export const Button = ({
  ref,
  className,
  color,
  fullWidth,
  icon,
  raised,
  ...props
}: IButtonProps) => (
  <button
    className={getClassName(
      'button',
      className,
      color,
      fullWidth && 'full-width',
      icon && 'icon',
      raised && 'raised'
    )}
    {...props}
  />
);

interface IButtonContainerProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
  align?: 'left' | 'right';
}
export const ButtonContainer: React.SFC<IButtonContainerProps> = ({
  className,
  align,
  ...props
}) => (
  <div
    className={getClassName('button-container', className, align)}
    {...props}
  />
);

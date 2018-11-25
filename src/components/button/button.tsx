import { Link } from '@reach/router';
import * as React from 'react';
import { joinClassName } from 'join-string';
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
  className,
  color,
  fullWidth,
  icon,
  raised,
  ...props
}: IButtonProps) => (
  <button
    className={joinClassName(
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

interface ILinkButtonProps {
  to: string;
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  icon?: boolean;
  raised?: boolean;
  className?: string;
}
export const LinkButton: React.SFC<ILinkButtonProps> = ({
  color,
  fullWidth,
  icon,
  className,
  raised,
  ...props
}) => (
  <Link
    className={joinClassName(
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
    className={joinClassName('button-container', className, align)}
    {...props}
  />
);

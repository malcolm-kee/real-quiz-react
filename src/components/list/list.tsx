import * as React from 'react';
import { getClassName } from '../../lib/string-util';
import { getButtonProps } from '../component-util';
import './list.scss';

export const List: React.SFC = ({ children }) => (
  <div className="list">{children}</div>
);

interface IListItemProps {
  className?: string;
  isButton?: boolean;
  onClick?: () => void;
}
export const ListItem: React.SFC<IListItemProps> = ({
  className,
  isButton,
  children,
  ...props
}) => {
  const allProps = [
    {
      className: getClassName('list--item', className, isButton && 'is-button'),
      ...props
    }
  ].map(isButton ? getButtonProps : x => x)[0];

  return <div {...allProps}>{children}</div>;
};

interface IListItemTextProps {
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  className?: string;
}
export const ListItemText: React.SFC<IListItemTextProps> = ({
  primary,
  secondary,
  className
}) => (
  <div className={getClassName('list--item-text', className)}>
    {primary && <h1 className="list--item-text-primary">{primary}</h1>}
    {secondary && <h2 className="list--item-text-secondary">{secondary}</h2>}
  </div>
);

export const ListItemSecondaryAction: React.SFC = ({ children }) => (
  <div
    onClick={ev => ev.stopPropagation()}
    className="list--item-secondary-action"
  >
    {children}
  </div>
);

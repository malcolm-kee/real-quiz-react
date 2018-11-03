import * as React from 'react';
import { getClassName } from '../../lib/string-util';
import './list.scss';

export const List: React.SFC = ({ children }) => (
  <div className="list">{children}</div>
);

interface IListItemProps {
  tabIndex?: number;
  className?: string;
  isButton?: boolean;
  onClick?: () => void;
}
export const ListItem: React.SFC<IListItemProps> = ({
  className,
  isButton,
  children,
  tabIndex,
  ...props
}) => {
  const Component = isButton ? 'button' : 'div';

  return (
    <Component
      className={getClassName('list--item', className, isButton && 'is-button')}
      tabIndex={tabIndex || !!isButton ? 0 : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

import React from 'react';
import { getClassName } from '../../lib/string-util';
import './icon.scss';

interface IMatIconProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
  iconName: string;
}

export const MatIcon: React.SFC<IMatIconProps> = ({
  iconName,
  className,
  ...props
}) => (
  <i className={getClassName('material-icons', className)} {...props}>
    {iconName}
  </i>
);

export const LoadingIcon = () => (
  <div className="loading-icon" role="progressbar">
    <svg className="loading-icon--svg" viewBox="0 0 50 50">
      <circle
        className="loading-icon--circle"
        cx="25"
        cy="25"
        r="20"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  </div>
);

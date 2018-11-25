import * as React from 'react';
import { joinClassName } from 'join-string';
import './card.scss';

interface ICardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
export const Card: React.SFC<ICardProps> = ({ className, ...props }) => (
  <div className={joinClassName('card', className)} {...props} />
);

export const CardHeader: React.SFC = ({ children }) => (
  <div className="card--header">{children}</div>
);

export const CardTitle: React.SFC = ({ children }) => (
  <h1 className="card--title">{children}</h1>
);

export const CardContent: React.SFC = ({ children }) => (
  <div className="card--content">{children}</div>
);

export const CardActions: React.SFC = ({ children }) => (
  <div className="card--actions">{children}</div>
);

import { Link } from '@reach/router';
import React from 'react';
import { logout, useAuthUser } from '../../auth';
import { Button } from '../button';
import { MatIcon } from '../icon';
import './appbar.scss';

/**
 *
 * @param {Object} props
 * @param {React.ReactNode} props.title - The title to be displayed in appbar
 * @param {boolean} props.hideAuth - to hide the auth section, i.e username / login button
 */
export const Appbar = props => {
  const { title, hideAuth } = props;
  const user = useAuthUser();

  return (
    <header className="appbar">
      <div className="appbar--title-container">
        <span className="appbar--title">{title}</span>
      </div>
      {!hideAuth &&
        (!!user ? (
          <span className="appbar--auth-container">
            <span className="appbar--username">{user.displayName}</span>
            <Button onClick={logout} color="primary" icon>
              <MatIcon iconName="power_settings_new" />
            </Button>
          </span>
        ) : (
          <Link to="/login" className="button primary">
            login
          </Link>
        ))}
    </header>
  );
};

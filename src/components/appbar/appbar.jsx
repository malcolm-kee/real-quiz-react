import React from 'react';
import './appbar.scss';

export const Appbar = ({ title }) => (
  <header className="appbar">
    <div>
      <span className="appbar--title">{title}</span>
    </div>
  </header>
);

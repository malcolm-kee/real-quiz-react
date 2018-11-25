import { joinClassName } from 'join-string';
import React, { useContext } from 'react';
import { FieldContext } from './field.parts';
import './label.scss';

export const Label = ({ className, htmlFor, children }) => {
  const { fieldId, isFocused, isFilled } = useContext(FieldContext);

  return (
    <label
      className={joinClassName(
        'label',
        className,
        isFocused && 'is-focus',
        isFilled && 'is-fill'
      )}
      htmlFor={htmlFor || fieldId}
    >
      {children}
    </label>
  );
};

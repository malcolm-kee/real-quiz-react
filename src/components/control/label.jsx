import React, { useContext } from 'react';
import { FieldContext } from './field.parts';
import { getClassName } from '../../lib/string-util';
import './label.scss';

export const Label = ({ className, htmlFor, children }) => {
  const { fieldId, isFocused, isFilled } = useContext(FieldContext);

  return (
    <label
      className={getClassName(
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

import React, { useContext, useEffect, useMemo, useReducer } from 'react';
import { callAll, noop } from '../../lib/fn-util';
import { getClassName } from '../../lib/string-util';
import {
  FieldContext,
  fieldReducer,
  fieldActionCreators,
  DEFAULT_STATE
} from './field.parts';
import './field.scss';

export const Field = ({ children }) => {
  const [state, dispatch] = useReducer(fieldReducer, DEFAULT_STATE);

  const fieldContext = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    <FieldContext.Provider value={fieldContext}>
      <div className="field">{children}</div>
    </FieldContext.Provider>
  );
};

export const useFieldControl = (
  { onChange, value, id, onChangeValue = noop, className, ...restProps },
  baseClassName
) => {
  const { isFocused, isFilled, dispatch } = useContext(FieldContext);

  useEffect(
    () => {
      if (id) {
        dispatch(fieldActionCreators.setFieldId(id));
      }
    },
    [id]
  );

  useEffect(
    () => {
      if (value && !isFilled) {
        dispatch(fieldActionCreators.setIsFilled(true));
      }
      if (!value && isFilled) {
        dispatch(fieldActionCreators.setIsFilled(false));
      }
    },
    [value]
  );

  return {
    id,
    onChange: callAll(onChange, ev => {
      const { value } = ev.target;
      onChangeValue(value);
    }),
    onFocus: () => dispatch(fieldActionCreators.setIsFocus(true)),
    onBlur: () => dispatch(fieldActionCreators.setIsFocus(false)),
    className: getClassName(
      baseClassName,
      isFocused && 'is-focus',
      isFilled && 'is-fill',
      className
    ),
    ...restProps
  };
};

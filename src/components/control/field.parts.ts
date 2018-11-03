import * as React from 'react';
import { noop } from '../../lib/fn-util';

export type fieldActionKeys = 'setIsFocus' | 'setIsFilled' | 'setFieldId';

type fieldActions = {
  type: fieldActionKeys;
  payload: boolean | string;
};

export const fieldActionCreators = {
  setIsFocus: (isFocus: boolean): fieldActions => ({
    type: 'setIsFocus',
    payload: isFocus
  }),
  setIsFilled: (isFilled: boolean): fieldActions => ({
    type: 'setIsFilled',
    payload: isFilled
  }),
  setFieldId: (fieldId: string): fieldActions => ({
    type: 'setFieldId',
    payload: fieldId
  })
};

interface IFieldState {
  fieldId: string;
  isFocused: boolean;
  isFilled: boolean;
}

interface IFieldContext extends IFieldState {
  dispatch: (action: fieldActions) => void;
}

export const DEFAULT_STATE: IFieldState = {
  fieldId: '',
  isFocused: false,
  isFilled: false
};

const DEFAULT_CONTEXT: IFieldContext = {
  ...DEFAULT_STATE,
  dispatch: noop
};

export const FieldContext = React.createContext(DEFAULT_CONTEXT);

export const fieldReducer = (
  state: IFieldState,
  action: fieldActions
): IFieldState => {
  switch (action.type) {
    case 'setFieldId':
      return {
        ...state,
        fieldId: action.payload as string
      };

    case 'setIsFilled':
      return {
        ...state,
        isFilled: action.payload as boolean
      };

    case 'setIsFocus':
      return {
        ...state,
        isFocused: action.payload as boolean
      };

    default:
      return state;
  }
};

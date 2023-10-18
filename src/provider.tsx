import React from 'react';
import {ScrollProviderProps} from './types';
import {ScrollContext, useScroll} from './context';

export const ScrollProvider = ({children, debug}: ScrollProviderProps) => {
  return <ScrollContext children={children} debug={debug} />;
};

export {useScroll};
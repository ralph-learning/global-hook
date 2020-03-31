import * as React from "react";
import useGlobalHook from "use-global-hook";

import actions from '../actions';

const initialState = {
  tabCounter: 0,
  buttonCounter: 0
};

const useGlobal: any = useGlobalHook(React, initialState, actions);

export default useGlobal;


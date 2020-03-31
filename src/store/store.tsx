import * as React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from '../actions';

export type GlobalState = {
  counter: number,
}

const initialState: GlobalState = {
  counter: 0
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;

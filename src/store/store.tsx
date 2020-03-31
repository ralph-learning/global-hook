import * as React from "react";
import useGlobalHook from "use-global-hook";

import actions from '../components/Counter.actions';

export type GlobalState = {
  counter: number,
}

const initialState: GlobalState = {
  counter: 0
};

const useGlobal: any = useGlobalHook(React, initialState, actions);

export default useGlobal;


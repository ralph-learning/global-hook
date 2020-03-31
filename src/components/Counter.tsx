import * as React from "react";
import useGlobal from '../store/store';

import { GlobalState } from '../store/store';

const Counter = () => {
  const [counterState, counterActions]  = useGlobal(
    (state: GlobalState) => state.counter,
    (actions: any) => actions.counter,
  );

  return (
    <div className="Counter">
      <p>
        Small Counter:
        {counterState}
      </p>

      <button type="button" onClick={() => counterActions.increase('+1')}>
        +1 to global
      </button>
      <button type="button" onClick={() => counterActions.decrease('-1')}>
        -1 to global
      </button>
    </div>
  );
};

export default Counter;


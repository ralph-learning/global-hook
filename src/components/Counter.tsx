import React, { useEffect } from "react";
import useGlobal, { GlobalState } from '../store/store';

export default function Counter() {
  const [counterState, counterActions]  = useGlobal(
    (state: GlobalState) => state.counter,
    (actions: any) => actions.counter,
  );

  useEffect(() => {
    counterActions.increase('+1 initial state');
  }, [counterActions]);

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

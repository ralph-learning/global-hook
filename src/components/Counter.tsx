import * as React from "react";
import useGlobal from '../store/store';

type Props = {
  name: string,
}

const Counter = ({ name }: Props) => {
  const [counterState, counterActions]  = useGlobal(
    (state: any) => state[name],
    (actions: any) => actions[name]
  );

  return (
    <div className="Counter">
      <p>
        Counter:
        {counterState}
      </p>

      <button type="button" onClick={counterActions.increase}>
        +1 to global
      </button>
      <button type="button" onClick={counterActions.decrease}>
        -1 to global
      </button>
    </div>
  );
};

export default Counter;


import * as React from "react";
import useGlobal from '../store/store';

type Props = {
  name: string,
}

const Counter = ({ name }: Props) => {
  const [globalState, globalActions]  = useGlobal();

  return (
    <div className="Counter">
      <p>
        Counter:
        {globalState[name]}
      </p>

      <button type="button" onClick={globalActions[name].increase}>
        +1 to global
      </button>
      <button type="button" onClick={globalActions[name].decrease}>
        -1 to global
      </button>
    </div>
  );
};

export default Counter;


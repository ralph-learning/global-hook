import * as React from 'react';

import useGlobal from '../store/store';
import { GlobalState } from '../store/store';

export default function BigPanelCounter() {
  const [counterState]  = useGlobal(
    (state: GlobalState) => state.counter,
  );

  return (
    <h1 style={{ fontSize: '100px' }}>
      Big Counter: {counterState}
    </h1>
  );
};


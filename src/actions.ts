const tabIncrease = (store: any, amount: number): void => {
  const tabCounter = store.state.tabCounter + 1;
  store.setState({ tabCounter });
};

const tabDecrease = (store: any, amount: number): void => {
  const tabCounter = store.state.tabCounter - 1;
  store.setState({ tabCounter });
};

const buttonIncrease = (store: any, amount: number): void => {
  const buttonCounter = store.state.buttonCounter + 1;
  store.setState({ buttonCounter });
};

const buttonDecrease = (store: any, amount: number): void => {
  const buttonCounter = store.state.buttonCounter - 1;
  store.setState({ buttonCounter });
};


export default {
  tabCounter: {
    increase: tabIncrease,
    decrease: tabDecrease,
  },
  buttonCounter: {
    increase: buttonIncrease,
    decrease: buttonDecrease,
  }
};


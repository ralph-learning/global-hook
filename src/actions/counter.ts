export const increase = (store: any, message: string): void => {
  console.log(message);
  const counter = store.state.counter + 1;
  store.setState({ counter });
};

export const decrease = (store: any, message: string): void => {
  console.log(message);
  const counter = store.state.counter - 1;
  store.setState({ counter });
};

export const reset = (store: any): void => {
  store.setState({ counter: 0 });
};


import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type WithProviderProps = {
  children: ReactNode;
};

const WithProvider = ({ children }: WithProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default WithProvider;

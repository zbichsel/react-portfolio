import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const userProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    users: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { userProvider, useStoreContext };

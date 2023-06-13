import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { context, initialState } from './store/store';
import { useReducer } from 'react';
import reducer from './store/reducer';

const RootApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
      <context.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <App />
      </context.Provider>
    </BrowserRouter>
  );
};

export default RootApp;

import { createContext, useReducer, useContext } from 'react';

export enum ActionTypes {
  SET_USER_INFO,
}

export type Payload = {
  userInfo?: any;
};

export type Action = {
  type: ActionTypes;
  payload: Payload;
};

type Dispatch = (action: Action) => void;

export type AppState = {
  userInfo: any;
};

const initState: AppState = {
  userInfo: null,
};

const AppStateContext = createContext<AppState | undefined>(initState);

const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

const AppReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_INFO: {
      const { userInfo } = action.payload;
      return { ...state, userInfo };
    }
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context !== undefined) {
    return context;
  }
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context !== undefined) {
    return context;
  }
};

export { AppProvider, useAppState, useAppDispatch };

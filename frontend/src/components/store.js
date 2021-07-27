import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as registerReducer } from "./register/reducer";
import { reducer as loginReducer } from "./login/reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
});
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

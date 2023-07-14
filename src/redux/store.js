import loginReducer from "./login/slice";
import jobReducer from "./jobs/slice"

const { combineReducers, configureStore } = require("@reduxjs/toolkit");


const rootReducer = combineReducers({
  login: loginReducer,
  job: jobReducer
});

export default configureStore({
  reducer: rootReducer,
});

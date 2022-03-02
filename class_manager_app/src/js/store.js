import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunk from "redux-thunk";
import generalReducer from "./reducers/reducer";
import loadFormReducer from "./reducers/loadFormReducer";
import fileReducer from "./reducers/fileReducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = {
    general: generalReducer,
    load: loadFormReducer,
    form: formReducer,
    file: fileReducer
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)))

export default store;
import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { todos } from "./components/reducers";

const reducers = {
  todos,
};

//persistConfig is an object that tells Redux Persist how to save and where to store data.
const persistConfig = {
  key: 'root',
  storage, //defaults to localStorage on web
  stateReconciler: autoMergeLevel2, 
}
//autoMergeLevel2 tells redux-persist how to handle the initial and stored states of application.
const rootReducer = combineReducers(reducers);
//persistConfig is an object that tells Redux how to save and store apps data.
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = createStore(persistedReducer);

export default configureStore;

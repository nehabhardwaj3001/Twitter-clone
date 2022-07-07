import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

export default configureStore({
  reducer: {
    rootReducer
  },
  devTools:  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
});
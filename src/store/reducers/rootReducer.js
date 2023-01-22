import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authReducer'
import projectReducer from './projectReducer';

export const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer
  },
}) 

export default rootReducer;

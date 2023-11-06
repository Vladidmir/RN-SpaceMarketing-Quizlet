import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import quizletReducer from './quizletSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  quizlet: quizletReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

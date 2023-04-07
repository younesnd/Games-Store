import { configureStore } from '@reduxjs/toolkit'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import usersReducer, { gamesApi } from './GamesApiSlice'

const rootReducer = combineReducers({
  games: usersReducer,
  [gamesApi.reducerPath]: gamesApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(gamesApi.middleware),
})

export const makeStore = () => {
  return store
}

export type RootState = ReturnType<typeof store.getState>

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true })

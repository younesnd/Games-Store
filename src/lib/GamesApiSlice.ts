import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { Game, SliceGame, initialGames } from '@/types'

export type GamesState = {
  games: SliceGame[]
  count: { count: number; sum: number }
  GreenBag: boolean
  FilterName: string
}
const initialState: GamesState = {
  games: initialGames,
  count: { count: 0, sum: 0 },
  GreenBag: false,
  FilterName: '',
}

type RemoveType = {
  name: string
  price: string
}

export const gamesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api/',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getGameByName: builder.query<{ game: Game }, string>({
      query: (name) => `games/${name}`,
    }),

    getGamesList: builder.query<{ games: Array<Game> }, void>({
      query: () => `games/all`,
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  useGetGamesListQuery,
  useGetGameByNameQuery,
  util: { getRunningQueriesThunk },
} = gamesApi
export const { getGamesList, getGameByName } = gamesApi.endpoints

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<SliceGame>) => {
      state.games.push(action.payload)
      state.count.count = state.count.count + 1
      state.count.sum = state.count.sum + parseFloat(action.payload.price)
      state.count.sum = Math.round(state.count.sum * 100) / 100
      if (state.count.count !== 0) {
        state.GreenBag = true
      }
    },
    removeGame: (state, action: PayloadAction<RemoveType>) => {
      state.games = state.games.filter(
        (game) => game.name !== action.payload?.name
      )

      state.count.sum = state.count.sum - parseFloat(action.payload?.price)
      state.count.sum = Math.round(state.count.sum * 100) / 100

      if (state.count.count > 0) {
        state.count.count = state.count.count - 1
      } else {
        state.count = state.count
      }
    },
    resetGames: () => {
      return initialState
    },
    filterName: (state, action: PayloadAction<string>) => {
      state.FilterName = action.payload
    },
  },
})

export const { removeGame, addGame, resetGames, filterName } =
  gamesSlice.actions
export default gamesSlice.reducer

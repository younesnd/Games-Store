import { useMemo } from 'react'
import { Game } from '@/types'

export type GamesList = {
  games: Game[]
}

export const useFilterGames = (
  currentFilter: string | null,
  data?: GamesList
) => {
  const gamesList = data
  const MemorizedFilter = useMemo(
    () => gamesList?.games.filter((item) => item.genre === currentFilter),
    [currentFilter]
  )
  return {
    gamesList,
    MemorizedFilter,
  }
}

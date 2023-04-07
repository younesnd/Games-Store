export type Game = {
  name: string
  surname: string
  price: string
  desc: string
  link: string
  release: string
  platforms: string
  genre: string
  developers: string
  publishers: string
  inCart: boolean
  selected: boolean
  isHovered: boolean
  isLiked: boolean
  rating: number
  id: number
  cover: string
  footage: string[]
}
export const initialGames = [
  {
    id: '',
    name: '',
    price: '',
  },
]

export type SliceGame = {
  id: string
  name: string
  price: string
}

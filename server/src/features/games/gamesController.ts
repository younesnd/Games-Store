import fs from 'fs/promises'
import path, { resolve } from 'path'

import { FastifyReply, FastifyRequest } from 'fastify'
import { nanoid } from 'nanoid'

import gamesOriginal from './gamesOriginal.json'

export type GamesType = Array<{
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
}>

const gamesFilePath = path.resolve(
  __dirname,
  '/home/younesnd/games-store/server/src/features/games/games.json'
)

const sleep = (time = 1000) => {
  new Promise((resolve) => setTimeout(resolve, time))
}

const readGames = async () => {
  const gamesBuffer = await fs.readFile(gamesFilePath)
  return JSON.parse(gamesBuffer.toString()) as GamesType
}

const writeGames = async (data: GamesType) => {
  return fs.writeFile(gamesFilePath, JSON.stringify(data), 'utf-8')
}
export const getGames = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  await sleep()

  return {
    games: await readGames(),
  }
}
type Getgame = {
  Params: {
    surname?: string
  }
}
export const getGame = async (
  request: FastifyRequest<Getgame>,
  reply: FastifyReply
) => {
  const { surname } = request.params
  if (!surname) throw new Error('Please Provide name')
  await sleep()
  const games = await readGames()
  const game = games.find((game) => game.surname === surname)
  return {
    
    game
  }
}

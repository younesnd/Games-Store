import Image from 'next/image'
import { useState } from 'react'
import styles from './Card.module.css'
import { addGame } from '@/lib/GamesApiSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { initialGames } from '@/types'

import { Game as CardGameTypes } from '@/types'
const createId = () => '_' + Math.random().toString(36).substring(2, 9)
const Card = (
  props: Pick<CardGameTypes, 'name' | 'cover' | 'price' | 'surname'>
) => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.games.games)
  const [emoji, setEmoji] = useState('\uD83E\uDD0D')
  const { cover, name, price, surname } = props
  const Added = !!data.find((game) => game.name === name)

  const handleEmoji = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setEmoji('\uD83D\uDC9A')
  }

  const handleAddGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!name || !price) return
    dispatch(
      addGame({
        id: createId(),
        name: name,
        price: price,
      })
    )
  }
  return (
    <div className={styles.CardStyle}>
      <Image
        className='rounded-2xl w-full'
        src={cover}
        alt={surname}
        width='180'
        height='150'
        sizes='(max-width: 758px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
      />

      <div className='flex justify-between m-3'>
        <button
          className={
            Added
              ? 'text-xg font-gloock text-sm  text-green-500'
              : 'text-xg font-gloock text-sm hover:text-violet-700 text-gray-500'
          }
          onClick={handleAddGame}
          disabled={Added ? true : false}
        >
          {Added ? 'Added \u2714' : 'Add to Cart +'}
        </button>
        <span className=' text-white font-roboto'>${price}</span>
      </div>
      <h1 className=' font-gloock text-xl text-white m-2'>{name}</h1>
      <button className='self-end m-2 text-white' onClick={handleEmoji}>
        {emoji}
      </button>
    </div>
  )
}

export default Card

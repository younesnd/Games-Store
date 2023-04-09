/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from '@/components/Card/Card'
import FilterSide from '@/components/FilterSide/FilterSide'
import NavBar from '@/components/NavBar/NavBar'
import React, { useState } from 'react'
import { useFilterGames } from '@/hooks/useFilterGames'
import 'src/styles/browse.module.css'
import { useGetGamesListQuery } from '@/lib/GamesApiSlice'
import { useAppSelector } from '@/lib/hook'
import { Game } from '@/types'

import styles from '/src/styles/browse.module.css'

type HomeProps = {
  children?: React.ReactNode
  games?: Game[]
}
export default function Browse(props: HomeProps) {
  const filterName = useAppSelector((state) => state.games.FilterName)
  const { data } = useGetGamesListQuery()
  const { gamesList, MemorizedFilter } = useFilterGames(filterName, data)

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 5 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className='min-h-screen bg-zinc-900 grid grid-rows-[auto,0.9fr] gap-6'
    >
      <NavBar search={true} handleSerch={() => true} />
      <div className='flex flex-col-[auto, 0.95fr]'>
        <FilterSide />
        <div className='grid grid-rows-[auto,0.9fr] ml-5'>
          <div className='flex flex-col text-6xl font-gloock text-white ml-14 mt-5 space-y-6'>
            <div className='flex flex-col'>
              <span className=''> Trending and interesting </span>
              <span className='text-[12px] font-roboto mt-2'>
                Based on player counts and ratings
              </span>
            </div>
            <div className='flex space-x-3 mt-5 mb-1'>
              <button type='button' className={styles.buttonStyle}>
                Filter by: <span className='font-gloock'>{filterName}</span>
              </button>
              <button type='button' className={styles.buttonStyle_2}>
                Clear Filter
              </button>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 ml-16 mt-4  lg:gap-5 md:gap-3'>
            {filterName === ''
              ? gamesList?.games.map((item) => {
                  return (
                    <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
                      <Link href={`/games/${item.surname}`}>
                        <Card
                          name={item.name}
                          cover={item.cover}
                          price={item.price}
                          surname={item.surname}
                        />
                      </Link>
                    </motion.div>
                  )
                })
              : MemorizedFilter?.map((item) => {
                  return (
                    <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
                      <Link href={`/games/${item.surname}`}>
                        <Card
                          name={item.name}
                          cover={item.cover}
                          price={item.price}
                          surname={item.surname}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

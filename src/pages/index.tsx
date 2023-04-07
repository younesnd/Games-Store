import {
  AllApplication,
  Cube,
  Github,
  LinkIn,
  Gamepad,
  DashboardOne,
  WebPage,
  BookmarkOne,
} from '@icon-park/react'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'

import styles from '/src/styles/Home.module.css'

import Button from '@/components/Button/Button'
import NavBar from '@/components/NavBar/NavBar'

type HomeProps = {
  children?: React.ReactNode
}
const Home: NextPage<HomeProps> = () => {
  const handelSearch = () => {
    return false
  }
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className='relative grid grid-rows-[auto,1fr]  h-screen mb-12 overflow-hidden'
    >
      <NavBar search={false} handleSerch={handelSearch} />
      <div className='grid grid-cols-[0.65fr,auto] gap-x-80 mt-8 mb-8 mr-6'>
        <div>
          <div className={styles.gameStore}>
            <h1 className='font-gloock text-8xl text-center p-5'>Game Store</h1>
            <p className='text-center mx-6 font-Monstarrat text-[16px]'>
              The best destination to buy new games to competitive prices. 24
              hour support, Best price guarantee and a flawless UX. Wish for
              more? Tell us below — or check out our careers.
            </p>
          </div>
          <div className={styles.underGameStore}>
            <Button
              IconPark={<AllApplication theme='filled' size='20' fill='#333' />}
              variant='buttonStyle'
              name='Browse'
            />

            <Button
              IconPark={<Cube theme='filled' size='20' fill='#333' />}
              variant='buttonStyle'
              name='Play Dice'
            />

            <Button
              IconPark={<Github theme='filled' size='20' fill='#333' />}
              variant='buttonStyle'
              name='Github'
            />
            <Button
              IconPark={<LinkIn theme='filled' size='20' fill='#333' />}
              variant='buttonStyle'
              name='LinkedIn'
            />
          </div>
        </div>

        <div className={styles.quickNav}>
          <h1 className='m-5 text-2xl text-white font-gloock text-center'>
            {' '}
            Quick Navigation
          </h1>
          <div className='flex flex-col items-center gap-0'>
            <Button
              IconPark={<Gamepad theme='filled' size='20' fill='#333' />}
              variant='buttonNav'
              name='Game Browse'
            />
            <Button
              IconPark={<DashboardOne theme='filled' size='20' fill='#333' />}
              variant='buttonNav'
              name='Performances'
            />
            <Button
              IconPark={<WebPage theme='filled' size='20' fill='#333' />}
              variant='buttonNav'
              name='Technologies'
            />
            <Button
              IconPark={<BookmarkOne theme='filled' size='20' fill='#333' />}
              variant='buttonNav'
              name='Sources'
            />
          </div>
        </div>
      </div>

      <video
        autoPlay={true}
        loop
        muted
        className='fixed bottom-0 right-0 min-w-full min-h-full max-w-none'
      >
        <source src='/Kazuha-Genshin-Impact-HD.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}

export default Home

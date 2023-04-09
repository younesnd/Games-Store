import { Down, Up } from '@icon-park/react'

import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './About.module.css'
type AboutTypeProps = {
  description?: string
  name?: string
  release?: string
  platforms?: string
  genre?: string
  developers?: string
  publishers?: string
  link? : string
}

const About = (props: AboutTypeProps) => {
  const {
    description,
    name,
    release,
    platforms,
    genre,
    developers,
    publishers,
    link
  } = props
  const [openMore, setOpenMore] = useState(false)
  return (
    <>
      <div className={styles.divStyle}>
        <h1 className=' font-gloock text-2xl p-2 text-white font-bold'>About</h1>
        <p className=' text-[13px] p-2 font-Inter text-[#ccc] h-24 mt-2 leading-6'>
          {description}
        </p>
      </div>
      {openMore ? (
        <motion.button 
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.1 }}
       className='flex' onClick={() => setOpenMore(false)}>
          <div className={styles.Sbb}>
            <div className='grid grid-rows-6 ml-5 place-items-start'>
              <a className='text-white font-gloock leading-6 text-[22px]' href={link}>
                {`${name} website`}
              </a>
              <span className='text-gray-500 font-roboto'>{`Released: ${release}`}</span>
              <span className='text-gray-500 font-roboto'>{`Platforms: ${platforms}`}</span>
              <span className='text-gray-500 font-roboto'>{`Main Genre: ${genre}`}</span>
              <span className='text-gray-500 font-roboto'>{`Developers: ${developers}`}</span>
              <span className='text-gray-500 font-roboto'>{`Publishers: ${publishers}`}</span>
            </div>

            <div className='flex self-end  place-self-end p-2'>
              <span className='text-gray font-roboto  text-white'>Hide</span>
              <div className='m-1'>
                <Up theme='outline' size='16' fill='#ffffff' />
              </div>
            </div>
          </div>
        </motion.button>
      ) : (
        <button className='flex' onClick={() => setOpenMore(true)}>
          <div className={styles.ButtonStyle}>
            <span className='text-gray font-roboto  text-white'>More</span>
            <div className='m-4'>
              <Down theme='outline' size='16' fill='#ffffff' />
            </div>
          </div>
        </button>
      )}
    </>
  )
}

export default About

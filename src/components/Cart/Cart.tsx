import { motion } from 'framer-motion'
import React from 'react'
import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.css'
import { resetGames } from '@/lib/GamesApiSlice'
import { useAppSelector, useAppDispatch } from '@/lib/hook'
type CartType = (M: boolean) => any

const Cart = (props: { setOpen: CartType }) => {
  const games = useAppSelector((state) => state.games)
  const dispatch = useAppDispatch()
  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(resetGames())
  }
  const { setOpen } = props
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.style_1}
      onClick={() => setOpen(false)}
    >
      <div className=' w-full h-full max-w-3xl'>
        {/*content*/}
        <div className={styles.style_2}>
          {games.count.count > 0 ? (
            <div className='flex  space-x-28 py-4 rounded-t'>
              <span className='font-gloock text-3xl'>{games.count.count} games</span>
              <button className='text-sm font-mono' onClick={handleClear}>
                Clear
              </button>
            </div>
          ) : (
            <div className='flex  justify-between py-4 rounded-t'>
              <span className='font-gloock text-3xl'>No games Added</span>
            </div>
          )}

          {games.games.map((item) => (
                item.name != '' 
           ? (<CartItem key={item.id} price={item.price} name={item.name} />)
           :null
            
          ))}

          <div className='relative bottom-0 flex items-center justify-end p-6 self-start z-30 bg-[#1a1a1a] rounded-b'>
            <span className='relative text-slate-300'>Total : ${games.count.sum}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Cart

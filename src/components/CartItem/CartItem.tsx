import { CloseOne } from '@icon-park/react'
import { motion } from 'framer-motion'
import React from 'react'
import styles from './CartItem.module.css'
import { removeGame } from '@/lib/GamesApiSlice'
import { useAppDispatch } from '@/lib/hook'
type cartItemTypeProps = {
  price: string
  name: string
}
const CartItem = (props: cartItemTypeProps) => {
  const dispatch = useAppDispatch()
  const { price, name } = props
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(removeGame(props))
  }
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.5 }}

      className={styles.ItemStyle}
    >
      <span className='text-gray-200 pl-3 font-roboto text-sm'>{name}</span>

      <div className='flex space-x-3'>
        <span className='text-gray-200 text-sm'>${price}</span>
        <button>
          <CloseOne
            theme='outline'
            size='18'
            fill='#ffffff'
            strokeWidth={3}
            onClick={onClick}
          />
        </button>
      </div>
    </motion.div>
  )
}

export default CartItem

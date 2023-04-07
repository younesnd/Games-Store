import { motion,  } from 'framer-motion'

import styles from './Button.module.css'

type typeButton = {
  variant: string
  name: string
  IconPark: React.ReactNode
}

const Button = (props: typeButton) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05, }}
        className={styles[props.variant]}
      >
        {props.IconPark}
        <span className='font-groock text-[17px]'>{props.name}</span>
      </motion.button>
    </>
  )
}
export default Button

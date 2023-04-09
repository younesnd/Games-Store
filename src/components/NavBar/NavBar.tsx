import {
  Shopping,
  Github,
  Search,
  ShoppingCart,
  NintendoSwitch,
} from '@icon-park/react'
import Link from 'next/link'
import { useState } from 'react'
import Cart from '../Cart/Cart'
import styles from './NavBar.module.css'
import { useAppSelector } from '@/lib/hook'

type NavBarTypesProps = {
  search: boolean
  handleSerch: () => void
}

const NavBar = (props: NavBarTypesProps) => {
  const count = useAppSelector((state) => state.games.count)
  const GreenBag = useAppSelector((state) => state.games.GreenBag)

  const [isOpen, setIsOpen] = useState(false)

  const { search } = props
  return (
    <nav className={styles.navStyle}>
      <div className={styles.navDev}>
        <Link href='' className='flex space-x-3 align-text-top'>
          <NintendoSwitch theme='outline' size='24' fill='#ffffff' />
          <div className='text-lg'>Game Store </div>
        </Link>
        {!search ? (
        <Link href='/browse' className='flex space-x-3'>
          <Shopping theme='outline' size='24' fill='#ffffff' />
          <div className='text-lg'>Browse Store</div>
        </Link> ) :null }
      </div>
      <div className={styles.navDev}>
        {search ? (
          <form className='flex align-middle space-x-4'>
            <input
              className={styles.inputStyle}
              placeholder='Search games...'
            />
            <button>
              <Search theme='outline' size='24' fill='#ffffff' />
            </button>
          </form>
        ) : null}
      </div>
      <div className={styles.navDev}>
        <a
          href='https://github.com/younesnd'
          className='flex space-x-3 text-lg'
        >
          <Github theme='outline' size='24' fill='#ffffff' />
          <div>YounesNidhal </div>
        </a>
        <button
          className='flex space-x-3 text-lg'
          onClick={() => setIsOpen(true)}
        >
          <ShoppingCart
            theme={GreenBag ? 'filled' : 'outline'}
            size='24'
            fill={GreenBag ? '#27a721' : '#ffffff'}
          />{' '}
          <div>Cart: {count.count}</div>
        </button>
        {isOpen ? <Cart setOpen={setIsOpen} /> : null}
      </div>
    </nav>
  )
}

export default NavBar

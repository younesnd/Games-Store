import styles from './AddTo.module.css'
import { addGame } from '@/lib/GamesApiSlice'
import { useAppSelector, useAppDispatch } from '@/lib/hook'

type AddToTypeProps<T = string | undefined> = {
  price: T
  name: T
}
const createId = () => '_' + Math.random().toString(36).substring(2, 9)

const AddTo = (props: AddToTypeProps) => {
  const { price, name } = props
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.games.games)
  const Added = !!data.find((game) => game.name === name)

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
    <div className={styles.divStyle}>
      <span className='text-gray-400 pl-3 font-roboto text-xl'>{`$${price}`}</span>
      <button
        className={
          Added
            ? 'text-xl font-gloock   text-green-500'
            : 'text-xl font-gloock  hover:text-violet-700 text-gray-500'
        }
        onClick={handleAddGame}
        disabled={Added ? true : false}
      >
        {' '}
        {Added ? 'Added \u2714' : 'Add to Cart +'}
      </button>
    </div>
  )
}

export default AddTo

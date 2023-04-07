import React from 'react'
import { filterName } from '@/lib/GamesApiSlice'
import { useAppDispatch } from '@/lib/hook'

type FilterSidePropsType = {
  Icon?: React.ReactNode
  name: string
  OnMouseEnter: () => void
  OnMouseLeave: () => void
}

const FilterSideButton = (props: FilterSidePropsType) => {
  const dispatch = useAppDispatch()
  const { Icon, name, OnMouseEnter, OnMouseLeave } = props

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(filterName(name))
  
    

  }
  return (
    <button
      className='flex font-roboto text-[20px] items-center align-middle text-white space-x-3'
      onClick={onClick}
    >
      <button
        className='bg-[#2D2D2D] hover:bg-white shadow-md border-b-gray-600 p-2 rounded-md ml-5 '
        onMouseEnter={OnMouseEnter}
        onMouseLeave={OnMouseLeave}
      >
        {Icon}
      </button>

      <div className=''> {name} </div>
    </button>
  )
}

export default FilterSideButton

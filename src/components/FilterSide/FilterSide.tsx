import {
  Gift,
  StarOne,
  FileCollectionOne,
  Puzzle,
  Flag,
  BoxingOne,
  Chess,
  Softball,
  Outdoor,
  StraightRazor,
} from '@icon-park/react'
import { useState } from 'react'

import FilterSideButton from '../FilterSideButton/FilterSideButton'

const FilterSide = () => {
  const [hover, setHover] = useState({
    color: '#ffffff',
    color_2: '#ffffff',
    color_3: '#ffffff',
    color_4: '#ffffff',
    color_5: '#ffffff',
    color_6: '#ffffff',
    color_7: '#ffffff',
    color_8: '#ffffff',
    color_9: '#ffffff',
    color_10: '#ffffff',
    color_11: '#ffffff',
  })
 
  return (
    <div className='flex flex-col m-5 text-white mt-16 '>
      <h1 className='font-gloock text-2xl ml-5 mb-5'> Filters </h1>
      <div className='flex flex-col space-y-3'>
        <FilterSideButton
          name='Wishlist'
          Icon={<Gift theme='outline' size='24' fill={hover.color} />}
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color: '#ffffff' }))
          }
        />
        <FilterSideButton 
          name='Ratings'
          Icon={<StarOne theme='outline' size='24' fill={hover.color_2} />}
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color_2: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color_2: '#ffffff' }))
          }
        />
        <FilterSideButton
          name='Reviews'
          Icon={
            <FileCollectionOne theme='outline' size='24' fill={hover.color_3} />
          }
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color_3: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color_3: '#ffffff' }))
          }
        />
      </div>
      <h1 className='font-gloock text-2xl ml-5 mb-5 mt-5'> Genres </h1>
      <div className='flex flex-col space-y-3'>
        <FilterSideButton
          name='Action'
          Icon={<BoxingOne theme='outline' size='24' fill={hover.color_4} />}
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color_4: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color_4: '#ffffff' }))
          }
        />
        <FilterSideButton
          name='RPG'
          Icon={<StraightRazor theme='outline' size='24' fill={hover.color_10} />}
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color_10: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color_10: '#ffffff' }))
          }
        />
        <FilterSideButton
          name='Puzzle'
          Icon={<Puzzle theme='outline' size='24' fill={hover.color_5} />}
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color_5: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color_5: '#ffffff' }))
          }
        />
        <FilterSideButton
          name='Racing'
          Icon={<Flag theme='outline' size='24' fill={hover.color_6} />}
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color_6: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color_6: '#ffffff' }))
          }
        />
        <FilterSideButton
          name='Sports'
          Icon={<Softball theme='outline' size='24' fill={hover.color_7} />}
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color_7: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color_7: '#ffffff' }))
          }
        />
        <FilterSideButton
          name='Adventure'
          Icon={<Outdoor theme='outline' size='24' fill={hover.color_8} />}
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color_8: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color_8: '#ffffff' }))
          }
        />
        <FilterSideButton
          name='Strategy'
          Icon={<Chess theme='outline' size='24' fill={hover.color_9} />}
          OnMouseEnter={() =>
            setHover((_hover) => ({ ..._hover, color_9: '#333' }))
          }
          OnMouseLeave={() =>
            setHover((_hover) => ({ ..._hover, color_9: '#ffffff' }))
          }
        />
        
      </div>
    </div>
  )
}

export default FilterSide

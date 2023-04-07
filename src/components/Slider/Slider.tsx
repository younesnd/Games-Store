/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Glide from '@glidejs/glide'

import { useEffect } from 'react'
import styles from './Slider.module.css'
type SliderType = {
  Image: string | undefined
  Image_2: string | undefined
  Image_3: string | undefined
  Image_4: string | undefined
}

const Slider = (props: SliderType) => {
  const { Image, Image_2, Image_3, Image_4 } = props
  useEffect(() => {
    const slider = new Glide('.glide-06', {
      type: 'slider',
      focusAt: 'center',
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      <div className='relative w-full ml-10 overflow-hidden bg-white shadow-xl glide-06 shadow-slate-500  container rounded-3xl'>
        <div className='overflow-hidden rounded-3xl' data-glide-el='track'>
          <ul className=' whitespace-nowrap flex-nowrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0'>
            <li>
              <img
                src={Image}
                className='w-full max-w-full max-h-full m-auto'
              />
            </li>
            <li>
              <img
                src={Image_2}
                className='w-full max-w-full max-h-full m-auto'
              />
            </li>
            <li>
              <img
                src={Image_3}
                className='w-full max-w-full max-h-full m-auto'
              />
            </li>
            <li>
              <img
                src={Image_4}
                className='w-full max-w-full max-h-full m-auto'
              />
            </li>
          </ul>
        </div>
        <div
          className='absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 '
          data-glide-el='controls'
        >
          <button
            className={styles.ButtonStyle}
            data-glide-dir='<'
            aria-label='prev slide'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <title>prev slide</title>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
              />
            </svg>
          </button>
          <button
            className={styles.ButtonStyle}
            data-glide-dir='>'
            aria-label='next slide'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <title>next slide</title>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </button>
        </div>
        <div
          className='absolute bottom-0 flex items-center justify-center w-full gap-2'
          data-glide-el='controls[nav]'
        >
          <button
            className='p-4 group'
            data-glide-dir='=0'
            aria-label='goto slide 1'
          >
            <span className={styles.SpanStyle}></span>
          </button>
          <button
            className='p-4 group'
            data-glide-dir='=1'
            aria-label='goto slide 2'
          >
            <span className={styles.SpanStyle}></span>
          </button>
          <button
            className='p-4 group'
            data-glide-dir='=2'
            aria-label='goto slide 3'
          >
            <span className={styles.SpanStyle}></span>
          </button>
          <button
            className='p-4 group '
            data-glide-dir='=3'
            aria-label='goto slide 4'
          >
            <span className={styles.SpanStyle}></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Slider

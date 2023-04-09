/* eslint-disable @typescript-eslint/no-unused-vars */
import { LeftSmall } from '@icon-park/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import About from '@/components/About/About'
import AddTo from '@/components/AddTo/AddTo'
import NavBar from '@/components/NavBar/NavBar'
import Slider from '@/components/Slider/Slider'
import { useGetGameByNameQuery } from '@/lib/GamesApiSlice'

// Partial because first render (will get empty props while `getStaticProps` runs)
export default function Games() {
  const router = useRouter()
  const surname = router.asPath.slice(7)

  const result = useGetGameByNameQuery(surname)

  const { isLoading, error, data } = result

  return (
    <div className='h-full min-h-screen bg-black grid grid-rows-[auto,auto,0.6fr, auto]'>
      <NavBar search={true} handleSerch={() => true} />
      <div className='flex justify-between align-middle md:px-2'>
        <Link href='/browse'>
          <div className='flex text-gray-400 lg:text-[24px] md:text-md px-5 py-12 mb-2 ml-8 items-center space-x-2 font-Inter mt-5 '>
            <LeftSmall
              theme='outline'
              size='30'
              fill='#ffffff'
              strokeLinecap='butt'
            />
            <span className=''>Store </span>
          </div>
        </Link>
        <span className=' text-white font-gloock lg:text-6xl md:text-2xl md:px-2 lg:mx-12 md:mx-8 lg:px-5 md:py-8 py-5 mb-2 mt-5 '>
          {data?.game.name}
        </span>
      </div>
      
      <Slider 
        Image={data?.game.footage?.[0]}
        Image_2={data?.game?.footage[1]}
        Image_3={data?.game?.footage[2]}
        Image_4={data?.game?.footage[3]}
      />
      <About
        description={data?.game.desc}
        name={data?.game.name}
        genre={data?.game.genre}
        publishers={data?.game.publishers}
        release={data?.game.release}
        developers={data?.game.developers}
        platforms={data?.game.platforms}
        link={data?.game.link}
      />
      <AddTo price={data?.game.price} name={data?.game.name} />
    </div>
  )
}

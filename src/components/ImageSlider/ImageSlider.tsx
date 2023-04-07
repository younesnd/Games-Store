/* eslint-disable @next/next/no-img-element */
const ImageSlider = (props: string) => {
  const urlImage = props
  return (
    <li>
      <img
        src={urlImage}
        alt='555'
        className='w-full max-w-full max-h-full m-auto'
      />
    </li>
  )
}

export default ImageSlider

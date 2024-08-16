// eslint-disable-next-line react/prop-types
const Image = ({ src, title, description }) => {
  return (
    <div className=' bg-secondary bg-opacity-50 m-2 rounded-md flex flex-col h-96  relative overflow-hidden'>
      <img
        src={src}
        alt={title}
        className='hover:scale-105 duration-300 h-full w-full'
      />
      <div className='z-10 h-20  w-full absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent '>
        <div className='absolute top-2 left-2'>
          <p className='text-lg font-semibold'>{title}</p>
          <p className='text-sm font-light'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Image

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePhotos } from '../context/PhotosContext'
import { saveAs } from 'file-saver'

const PhotoDetails = () => {
  const { id } = useParams()
  const { photos } = usePhotos()

  const [currPhoto, setPhoto] = useState({
    url: '',
    title: '',
    description: ''
  })
  useEffect(() => {
    const photo = photos.find((photo) => photo.id === id)
    setPhoto(photo)
  }, [id, photos])

  return (
    <div className='bg-black min-h-screen text-white'>
      <nav className='h-16 flex justify-between items-center px-6'>
        <h1>Photo App</h1>

        <button
          //   onClick={() =>
          // setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
          //   }
          className='bg-secondary px-4 py-2 rounded-lg flex-center'
        >
          dark
        </button>
      </nav>
      <div className='relative max-sm:py-6'>
        <Link
          to={'/gallery'}
          className='absolute top-0 left-0 rounded-lg h-10 px-4 py-2 flex-center hover:text-primary duration-100'
        >
          {'<- Back to Gallery'}
        </Link>
        <h1 className='heading self-center'>Photo Details Page</h1>
      </div>
      <div className='px-4 flex max-sm:flex-col-reverse '>
        <div className='flex-[0.3] p-4 flex flex-col justify-center'>
          <p className='text-4xl font-bold m-4'>{currPhoto.title}</p>
          <div>
            <p className='text-xl font-semibold my-2 mx-4 text-primary'>
              Description
            </p>
            <p className='text-md mx-4 min-h-60'>{currPhoto.description}</p>
          </div>
          <button
            onClick={() => saveAs(currPhoto.url, `${currPhoto.title}.jpg`)}
            className='bg-secondary border-[1px] border-primary border-opacity-20 rounded-lg flex-center px-4 py-2 m-4 hover:bg-black duration-200'
          >
            Download Photo
          </button>
        </div>
        <div className='flex-[0.7] flex-center p-2  h-[550px]'>
          <img src={currPhoto.url} alt='' className='rounded-sm h-full' />
        </div>
      </div>
    </div>
  )
}

export default PhotoDetails

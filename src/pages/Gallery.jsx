import { Link } from 'react-router-dom'
import Image from '../components/Image'
import { usePhotos } from '../context/PhotosContext'

const Gallery = () => {
  const { photos } = usePhotos()
  return (
    <div className=' px-8'>
      <h1 className='heading'>Gallery Page</h1>
      <div className='flex flex-wrap max-sm:justify-center'>
        {photos.length === 0 ? (
          <h1 className='text-xl opacity-75 flex-center h-full w-full my-10'>
            No photos to display
          </h1>
        ) : (
          photos.map((photo, i) => (
            <Link to={`/photo/${photo?._id}`} key={i}>
              <Image
                src={photo?.url}
                title={photo?.title}
                description={photo?.description}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default Gallery

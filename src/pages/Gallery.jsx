import { Link } from 'react-router-dom'
import Image from '../components/Image'
import { usePhotos } from '../context/PhotosContext'

const Gallery = () => {
  const { photos } = usePhotos()
  return (
    <div className=' px-8'>
      <h1 className='heading'>Gallery Page</h1>
      <div className='flex flex-wrap max-sm:justify-center'>
        {photos.map((photo, i) => (
          <Link to={`/photo/${photo.id}`} key={i}>
            <Image
              src={photo.url}
              title={photo.title}
              description={photo.description}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Gallery

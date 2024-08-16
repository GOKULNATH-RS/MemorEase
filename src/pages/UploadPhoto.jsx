import toast from 'react-hot-toast'
import { toastStyle } from '../constants/utils'
import { useState } from 'react'
import { storage } from '../utils/firebase'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
import { usePhotos } from '../context/PhotosContext'
import { v4 } from 'uuid'

const UploadPhoto = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState(null)
  const navigate = useNavigate()
  const { addPhotos } = usePhotos()

  const handleUpload = (e) => {
    e.preventDefault()

    toast.promise(
      uploadBytes(ref(storage, photo.name), photo).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            const newPhoto = { id: v4(), url, title, description }
            console.log(newPhoto)
            addPhotos(newPhoto)
          })
          .then(navigate('/gallery'))
      }),
      {
        loading: 'Uploading photo...',
        success: 'Photo uploaded successfully!',
        error: 'Failed to upload photo'
      },
      toastStyle
    )
  }

  return (
    <div>
      <h1 className='heading'>Upload Photo</h1>
      <div className='flex-center max-sm:flex-col gap-8 max-sm:gap-2 '>
        <div>
          <label htmlFor='file-upload'>
            <div className='h-72 w-[450px] max-sm:h-60 max-sm:w-[350px] flex-center border border-dashed border-opacity-20 border-white bg-white bg-opacity-5 hover:bg-opacity-10 rounded-xl'>
              <div className='flex-center flex-col opacity-35'>
                {photo ? (
                  <></>
                ) : (
                  <svg
                    className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 16'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                    />
                  </svg>
                )}
                <p className='text-sm font-light  '>
                  {photo
                    ? photo.name
                    : 'Drag and drop your photo here or click to browse'}
                </p>
              </div>
            </div>
            <input
              id='file-upload'
              type='file'
              className='hidden'
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </label>
        </div>
        <form className='my-2 p-4 ' onSubmit={(e) => handleUpload(e)}>
          <div className='flex flex-col gap-2 my-2'>
            <label htmlFor='title' className='text-xl font-semibold '>
              Title
            </label>
            <input
              type='text'
              id='title'
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter Photo Title'
              className='px-4 py-2 rounded-lg  border border-white bg-transparent placeholder:font-light placeholder:opacity-30 focus:outline-none focus:border-primary'
            />
          </div>
          <div className='flex flex-col gap-2 w-80 my-2'>
            <label htmlFor='title' className='text-xl font-semibold '>
              Description
            </label>
            <textarea
              id='title'
              rows={'4'}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Enter Photo Description'
              className='px-4 py-2 w- rounded-lg h-32 border border-white bg-transparent placeholder:font-light placeholder:opacity-30 focus:outline-none focus:border-primary'
            />
          </div>
          <button
            type='submit'
            className='bg-secondary h-12 w-full text-white px-4 py-2 rounded-lg my-4 '
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  )
}

export default UploadPhoto

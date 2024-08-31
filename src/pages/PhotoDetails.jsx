import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePhotos } from '../context/PhotosContext'
import { saveAs } from 'file-saver'
import { useTheme } from '../context/ThemeContext'

const PhotoDetails = () => {
  const { id } = useParams()
  const { photos, setPhotos } = usePhotos()
  const { theme, toggleTheme } = useTheme()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editable, setEditable] = useState(false)

  const [currPhoto, setPhoto] = useState({
    url: '',
    title: '',
    description: ''
  })
  useEffect(() => {
    const photo = photos.find((photo) => photo?._id === id)
    setTitle(photo?.title)
    setPhoto(photo)
    setDescription(photo?.description)
  }, [id, photos])

  function handleEdit() {
    const updatedPhotos = photos.map((photo) => {
      if (photo._id === id) {
        photo.title = title
        photo.description = description
      }

      return photo
    })

    setPhotos(updatedPhotos)
    setEditable(false)
  }

  return (
    <div
      className={`min-h-screen no-scrollbar pb-10 ${
        theme === 'dark' ? 'text-white bg-black' : 'bg-white text-black'
      } `}
    >
      <nav className='h-16 flex justify-between items-center px-6'>
        <Link to={'/'} className='flex items-center text-2xl font-bold gap-1'>
          {theme === 'dark' ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
            >
              <path
                fill='white'
                d='M13.81 2.86c.17-.3 0-.7-.35-.74c-2.62-.37-5.3.28-7.44 1.86c-.19.15-.25.43-.12.65l3.01 5.22c.19.33.67.33.87 0zm7.49 5.47c-.98-2.47-2.92-4.46-5.35-5.5c-.23-.1-.5 0-.63.22l-3.01 5.21c-.19.32.05.74.44.74h8.08c.35 0 .6-.35.47-.67m.07 1.67h-6.2c-.38 0-.63.42-.43.75L19 18.14c.17.3.6.35.82.08c1.74-2.18 2.48-5.03 2.05-7.79a.5.5 0 0 0-.5-.43M4.18 5.79a10.1 10.1 0 0 0-2.05 7.79c.03.24.25.42.5.42h6.2c.38 0 .63-.42.43-.75L5 5.87c-.18-.3-.61-.35-.82-.08M2.7 15.67c.98 2.47 2.92 4.46 5.35 5.5c.23.1.5 0 .63-.22l3.01-5.21a.502.502 0 0 0-.43-.75H3.17c-.35.01-.6.36-.47.68m7.83 6.22c2.62.37 5.3-.28 7.44-1.86c.2-.15.26-.44.13-.66l-3.01-5.22a.506.506 0 0 0-.87 0l-4.04 6.99c-.17.3.01.7.35.75'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
            >
              <path
                fill='#060f27'
                d='M13.81 2.86c.17-.3 0-.7-.35-.74c-2.62-.37-5.3.28-7.44 1.86c-.19.15-.25.43-.12.65l3.01 5.22c.19.33.67.33.87 0zm7.49 5.47c-.98-2.47-2.92-4.46-5.35-5.5c-.23-.1-.5 0-.63.22l-3.01 5.21c-.19.32.05.74.44.74h8.08c.35 0 .6-.35.47-.67m.07 1.67h-6.2c-.38 0-.63.42-.43.75L19 18.14c.17.3.6.35.82.08c1.74-2.18 2.48-5.03 2.05-7.79a.5.5 0 0 0-.5-.43M4.18 5.79a10.1 10.1 0 0 0-2.05 7.79c.03.24.25.42.5.42h6.2c.38 0 .63-.42.43-.75L5 5.87c-.18-.3-.61-.35-.82-.08M2.7 15.67c.98 2.47 2.92 4.46 5.35 5.5c.23.1.5 0 .63-.22l3.01-5.21a.502.502 0 0 0-.43-.75H3.17c-.35.01-.6.36-.47.68m7.83 6.22c2.62.37 5.3-.28 7.44-1.86c.2-.15.26-.44.13-.66l-3.01-5.22a.506.506 0 0 0-.87 0l-4.04 6.99c-.17.3.01.7.35.75'
              />
            </svg>
          )}
          <p>
            Memor
            <span
              className={`${
                theme === 'dark' ? 'text-primary' : 'text-black'
              } m-0 p-0`}
            >
              Ease
            </span>
          </p>
        </Link>

        <button
          onClick={toggleTheme}
          className='px-4 py-2  rounded-lg flex-center'
        >
          {theme === 'dark' ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
              className='h-10 w-10'
            >
              <path
                fill='#f9fafb'
                d='M17.891 12a5.94 5.94 0 0 1-3.68 5.499a5.97 5.97 0 0 1-6.496-1.295A5.948 5.948 0 0 1 11.943 6.05a5.96 5.96 0 0 1 4.21 1.743A5.94 5.94 0 0 1 17.89 12M3.203 13.048H2.05A1.05 1.05 0 0 1 1 12a1.047 1.047 0 0 1 1.05-1.048h1.153A1.05 1.05 0 0 1 4.253 12a1.047 1.047 0 0 1-1.05 1.048m18.747 0h-1.143A1.05 1.05 0 0 1 19.758 12a1.047 1.047 0 0 1 1.05-1.048h1.143A1.05 1.05 0 0 1 23 12a1.047 1.047 0 0 1-1.05 1.048m-9.965-8.8a1.05 1.05 0 0 1-1.05-1.048V2.048A1.047 1.047 0 0 1 11.986 1a1.05 1.05 0 0 1 1.049 1.048V3.2a1.047 1.047 0 0 1-1.05 1.048m0 18.752a1.05 1.05 0 0 1-1.05-1.047V20.8a1.047 1.047 0 0 1 1.05-1.048a1.05 1.05 0 0 1 1.049 1.048v1.152A1.047 1.047 0 0 1 11.984 23M5.753 6.825a1.05 1.05 0 0 1-.745-.314l-.819-.807a1.051 1.051 0 0 1 .745-1.796c.28 0 .548.111.745.308l.819.817a1.047 1.047 0 0 1 0 1.478a1.05 1.05 0 0 1-.745.314m13.271 13.221a1.05 1.05 0 0 1-.735-.304l-.818-.817a1.047 1.047 0 0 1 1.14-1.739q.196.096.34.262l.818.817a1.047 1.047 0 0 1 0 1.477a1.05 1.05 0 0 1-.745.304m-.808-13.221a1.05 1.05 0 0 1-1.034-1.254c.04-.204.142-.391.29-.538l.818-.817a1.05 1.05 0 0 1 1.48 1.488l-.82.807a1.05 1.05 0 0 1-.734.314M4.934 20.046a1.05 1.05 0 0 1-.745-.304a1.046 1.046 0 0 1 0-1.477l.819-.817a1.05 1.05 0 0 1 1.49 0a1.047 1.047 0 0 1 0 1.477l-.819.817a1.05 1.05 0 0 1-.745.304'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 256 256'
              className='h-10 w-10'
            >
              <path
                fill='#060f27'
                d='M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.1 103.1 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z'
              />
            </svg>
          )}
        </button>
      </nav>
      <div className='relative max-sm:py-6'>
        <Link
          to={'/'}
          className='absolute top-0 left-0 rounded-lg h-10 px-4 py-2 flex-center hover:text-primary duration-100'
        >
          {'<- Back to Gallery'}
        </Link>
        <h1 className='heading self-center'>Photo Details Page</h1>
      </div>
      <div className='px-4 flex max-sm:flex-col-reverse '>
        <div className='flex-[0.3]  p-4 flex flex-col justify-center'>
          <div className='flex justify-between flex-col-reverse'>
            <p className='text-4xl font-bold m-4'>
              {
                <input
                  type='text'
                  name='title'
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={!editable}
                  className={`text-4xl font-bold m-4 bg-transparent ${
                    editable ? 'border-white/20 border-[1px] rounded-md' : ''
                  }`}
                />
              }
            </p>
            <button
              className={`py-1 px-2 rounded-lg w-max  border-[1px] border-primary border-opacity-20 ${
                theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'
              }`}
              onClick={() => {
                if (editable) {
                  handleEdit()
                }
                setEditable(!editable)
              }}
            >
              {editable ? 'Save' : 'Edit'}
            </button>
          </div>
          <div className='w-full '>
            <p
              className={`text-xl font-semibold my-2 mx-4 w-32  ${
                theme === 'dark' ? 'text-primary' : 'text-black'
              }`}
            >
              Description
            </p>

            <p className='text-md max-w-96 overflow-hidden mx-4 min-h-60'>
              {editable ? (
                <textarea
                  name='desc'
                  id='desc'
                  cols={30}
                  rows={10}
                  value={description}
                  className={`my-2 w-full h-full bg-transparent ${
                    editable && 'border-[1px] border-white/20'
                  }`}
                  disabled={!editable}
                  onChange={(e) => setDescription(e.target.value)}
                >
                  {currPhoto?.description}
                </textarea>
              ) : (
                currPhoto?.description
              )}
            </p>
          </div>
          <button
            onClick={() => saveAs(currPhoto?.url, `${currPhoto?.title}.jpg`)}
            className='bg-secondary text-white  border-[1px] border-primary border-opacity-20 rounded-lg flex-center px-4 py-2 m-4 hover:bg-black duration-200'
          >
            Download Photo
          </button>
        </div>
        <div className='flex-[0.7] flex-center p-2  h-[550px]'>
          <img src={currPhoto?.url} alt='' className='rounded-sm h-full' />
        </div>
      </div>
    </div>
  )
}

export default PhotoDetails

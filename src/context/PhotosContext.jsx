import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

export const PhotosContext = createContext()

// eslint-disable-next-line react/prop-types
export const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([])
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/photos`)
      .then((res) => {
        console.log(res.data)
        setPhotos(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [photos])
  const toggleTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }

  const addPhotos = (newPhotos) => {
    setPhotos((photos) => [...photos, newPhotos])
  }

  return (
    <PhotosContext.Provider value={{ photos, theme, toggleTheme, addPhotos }}>
      {children}
    </PhotosContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePhotos = () => useContext(PhotosContext)

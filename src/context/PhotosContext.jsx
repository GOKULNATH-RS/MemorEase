import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { initialLoadPhotos } from '../constants/utils'

export const PhotosContext = createContext()

// eslint-disable-next-line react/prop-types
export const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState(initialLoadPhotos)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/photos`)
      .then((res) => {
        setPhotos(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleEditTitle(value) {
    setTitle(value)
  }

  function handleDescription(value) {
    setDescription(value)
  }

  const addPhotos = (newPhotos) => {
    setPhotos((photos) => [...photos, newPhotos])
  }

  return (
    <PhotosContext.Provider
      value={{
        photos,
        setPhotos,
        addPhotos,
        title,
        handleEditTitle,
        description,
        handleDescription
      }}
    >
      {children}
    </PhotosContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePhotos = () => useContext(PhotosContext)

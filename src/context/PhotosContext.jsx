import { createContext, useContext, useState } from 'react'

export const PhotosContext = createContext()

// eslint-disable-next-line react/prop-types
export const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([
    {
      id: '718b3449-25db-419c-94e2-1',
      url: 'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/aliyar-logo.jpg?alt=media&token=bf4a1139-8493-446f-b5f9-91672e1cc832',
      title: 'Aliyar Trip',
      description:
        'A wondertful trip to aliyar with friends. A memorable one...🔥A wondertful trip to aliyar with friends. A memorable one...🔥A wondertful trip to aliyar with friends. A memorable one...🔥A wondertful trip to aliyar with friends. A memorable one...🔥A wondertful trip to aliyar with friends. A memorable one...🔥'
    },
    {
      id: '718b3449--419c--e802f1460ab1',
      url: 'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/LLR.jpg?alt=media&token=58c2f1a2-3de2-4bc7-88b8-69a8c2ed93f8',
      title: 'LLR',
      description: 'LLR of gokul'
    },
    {
      id: '718b3449-25db--94e2-e802f1460ab1',
      url: 'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/GG.jfif?alt=media&token=3777a3c2-ce80-4a94-a6b6-0bb5dc0ddd93',
      title: 'Mustang Car',
      description: 'Car Muzzle 🚗'
    },
    {
      description: 'Awesome Experience',
      id: '718b3449-25db-419c-94e2-e802f1460ab1',
      title: 'ALiyar Trip ',
      url: 'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/aliyar-logo.jpg?alt=media&token=a154a53f-7d44-4e84-b04a-e9fb31008df4'
    },
    {
      description: 'Greatest hackathon from trivandrum',
      id: '8d970885-0bd0-485f-8418-506183412d37',
      title: 'Yukthi Banner',
      url: 'https://firebasestorage.googleapis.com/v0/b/photo-management-app-17909.appspot.com/o/yukthi-banner.png?alt=media&token=7dd624d1-62ed-4895-8b65-ee177683f390'
    }
  ])
  const [theme, setTheme] = useState('dark')

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

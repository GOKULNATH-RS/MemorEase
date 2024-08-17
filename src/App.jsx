import { Toaster } from 'react-hot-toast'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import UploadPhoto from './pages/UploadPhoto'
import Gallery from './pages/Gallery'
import PhotoDetails from './pages/PhotoDetails'
import { PhotosProvider } from './context/PhotosContext'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <PhotosProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/upload' element={<UploadPhoto />} />
              <Route path='/' element={<Gallery />} />
            </Route>
            <Route path='/photo/:id' element={<PhotoDetails />} />
          </Routes>
        </BrowserRouter>
      </PhotosProvider>
    </ThemeContextProvider>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
  return (
    <div className='text-white bg-black min-h-screen pb-10'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout

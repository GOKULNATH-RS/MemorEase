import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useTheme } from '../context/ThemeContext'

const Layout = () => {
  const { theme } = useTheme()
  return (
    <div
      className={`${
        theme === 'dark' ? 'text-white bg-black' : 'bg-white text-black '
      } min-h-screen pb-10 `}
    >
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout

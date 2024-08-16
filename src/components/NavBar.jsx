import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const NavBar = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Upload', path: '/upload' },
    { title: 'Gallery', path: '/gallery' }
  ]

  const { theme, toggleTheme } = useTheme()

  return (
    <nav className='h-16 flex justify-between items-center px-6'>
      <h1>Photo App</h1>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index} className='inline-block mx-4 max-sm:mx-2'>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={toggleTheme}
        className='bg-secondary px-4 py-2 rounded-lg flex-center'
      >
        {theme}
      </button>
    </nav>
  )
}

export default NavBar

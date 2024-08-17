import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const NavBar = () => {
  const navLinks = [
    { title: 'Gallery', path: '/gallery' },
    { title: 'Upload', path: '/upload' }
  ]

  const { theme, toggleTheme } = useTheme()

  return (
    <nav className='h-16 flex justify-between items-center px-6'>
      <Link to={'/'}>Photo App</Link>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index} className='inline-block mx-4 max-sm:mx-2'>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
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
  )
}

export default NavBar

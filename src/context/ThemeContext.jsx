import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [active, setActive] = useState('gallery')
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }

  const setMobileMenufn = () => {
    setMobileMenu((value) => !value)
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        active,
        setActive,
        mobileMenu,
        setMobileMenufn
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext)
}

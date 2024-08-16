import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    console.log('toggleTheme')

    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
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

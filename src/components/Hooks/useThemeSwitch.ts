'use client'

import React, { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export function useThemeSwitch(): [
  // string,
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>,
] {
  const preferDarkQuery = '(prefers-color-schema:light)'
  const storageKey = 'theme'
  const [mode, setMode] = useState<Theme>('light')

  const toggleTheme = (theme: Theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.localStorage.setItem(storageKey, theme)
  }

  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey)

    if (userPref) {
      return userPref as Theme
    }

    // return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light'
    return 'light'
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)

    const handleChange = () => {
      const newMode = getUserPreference()
      setMode(newMode)
      toggleTheme(newMode)
    }
    handleChange()

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    toggleTheme(mode)
  }, [mode])

  return [mode, setMode]
}

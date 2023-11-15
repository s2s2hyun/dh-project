'use client'

import React, { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export function useThemeSwitch(): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] {
  const preferDarkQuery = '(prefers-color-schema:dark)'
  const storageKey = 'theme'
  const [mode, setMode] = useState('dark')

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
      return userPref
    }

    return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light'
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)

    const handleChange = () => {
      const newMode = getUserPreference()
      setMode(newMode)
      toggleTheme(newMode as Theme)
    }
    handleChange()

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    toggleTheme(mode as Theme)
  }, [mode])

  return [mode, setMode]
}

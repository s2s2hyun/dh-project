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
    // window 객체가 존재할 때만 실행
    if (typeof window !== 'undefined') {
      const userPref = window.localStorage.getItem(storageKey)

      if (userPref) {
        return userPref as Theme
      }
    }

    return 'light' // 기본값 반환
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

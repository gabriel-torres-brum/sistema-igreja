import { useState, useEffect } from "react"

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    if (localStorage.theme === "light") {
      localStorage.theme = "dark"
      document.documentElement.classList.add("dark")
      return null
    }
    
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark")
  }
  
  return {
    darkMode,
    setDarkMode,
    toggleDarkMode
  }
}
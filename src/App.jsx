import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useEffect,useState } from "react"

function App() {
  const [ theme, setTheme ] = useState("")
  
  const handleSun = ()=>{
    setTheme("dark")
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    localStorage.setItem('theme', 'dark');
  }
  const handleMoon = () =>{
    setTheme("light")
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    localStorage.setItem('theme', 'light');
  }


  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme')
    console.log(savedTheme)
    const themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme)
      document.documentElement.classList.remove(savedTheme === "dark" ? "light" : "dark")
      return
    } 
    if (themeSystem) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem('theme', 'dark');
      return
    } 
    if(!themeSystem) {
      setTheme("light")
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
      localStorage.setItem('theme', 'light');
      return
    }

  },[])

  return (
    <>
      <Header
        theme={theme}
        handleMoon={handleMoon}
        handleSun={handleSun}
      />
      <Main/>
      <Footer/>
    </>
  )
}

export default App

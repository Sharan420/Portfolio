import './App.css'
import { Intro, About, Skills } from './Sections/'
import { Navbar, Loader } from './Components'
import { useVideoContext } from './Contexts/VideoContext'
import { useEffect, useState } from 'react'
function App() {
  const { currentTime } = useVideoContext()
  const [letScroll, setLetScroll] = useState(false)

  useEffect(() => {
    if (currentTime >= 6 && !letScroll) {
      setLetScroll(true)
      console.log('show')
      return
    }
  }, [letScroll, currentTime])
  return (
    <div
      className={
        letScroll ? 'absolute h-full ' : 'absolute h-full overflow-hidden'
      }
    >
      <Navbar />
      <Intro />
      <Loader />
      <About />
    </div>
  )
}

export default App

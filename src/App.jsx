import './App.css'
import { Intro, About } from './Sections/'
import { Navbar } from './Components'

function App() {
  return (
    <div className="absolute h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-500 ">
      <Navbar />
      <Intro />
      <About />
    </div>
  )
}

export default App

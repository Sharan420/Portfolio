import './App.css'
import { Intro, About, Skills } from './Sections/'
import { Navbar, Loader } from './Components'

function App() {
  return (
    <div className="absolute w-full">
      <Navbar />
      <Intro />
      <Loader />
      <About />
    </div>
  )
}

export default App

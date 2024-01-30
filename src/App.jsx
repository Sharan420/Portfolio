import './App.css'
import { Intro, About, Skills } from './Sections/'
import { Navbar, Loader } from './Components'
function App() {
  return (
    <div
      className={true ? 'absolute h-full ' : 'absolute h-full overflow-hidden'}
    >
      <Navbar />
      <Intro />
      <Loader />
      <About />
      <Skills />
    </div>
  )
}

export default App

//Imports:
import './App.css'
import { Intro, About, Skills, Work } from './Sections/'
import { Navbar, Loader } from './Components'

//Components:
function App() {
  //Return:
  return (
    <div
      // eslint-disable-next-line no-constant-condition
      className={
        true
          ? 'absolute h-full w-full scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary overflow-y-scroll'
          : 'absolute h-full overflow-hidden'
      }
    >
      <Navbar />
      <Intro />
      <Loader />
      <About />
      <Skills />
      <Work />
    </div>
  )
}

//Exports:
export default App

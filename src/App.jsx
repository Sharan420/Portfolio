//Imports:
import './App.css'
import { Intro, About, Skills, Work, WorkMob } from './Sections/'
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
      <WorkMob />
    </div>
  )
}

//Exports:
export default App

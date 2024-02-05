//Imports:
import './App.css'
import { Intro, About, Skills, Work, WorkMob, Contact } from './Sections/'
import { Navbar, Loader } from './Components'

//Components:
function App() {
  //Return:
  return (
    <div
      // eslint-disable-next-line no-constant-condition
      className={
        'absolute h-full w-full scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary overflow-y-scroll'
      }
    >
      <Navbar />
      <Intro />
      <Loader />
      <About />
      <Skills />
      <Work />
      <WorkMob />
      <Contact />
    </div>
  )
}

//Exports:
export default App

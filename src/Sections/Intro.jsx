import bgImage from '../Assets/final-bg.gif'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Intro = () => {
  const words = ['Web Developer', 'Student', 'Designer', 'Artist', 'Jedi']
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 3500,
    typeSpeed: 150,
    deleteSpeed: 80,
  })

  return (
    <section className="relative">
      <div
        className="z-0 relative flex justify-center items-end h-screen px-11 flex-col"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <span className="text-[#F8FEF5] text-[40px] font-inconsolata leading-10 font-normal">
          Hello there
        </span>
        <span className="text-[#F8FEF5] text-[128px] font-inconsolata leading-[134px] font-bold">
          I&apos;m Sharan Suri
        </span>
        <span className="mix-blend-color-dodge text-[#FFFF]/[0.45] text-[120px] font-inconsolata leading-[126px] font-black ">
          <span>{text}</span>
          <Cursor cursorStyle="_" cursorBlinking />
        </span>
        <p className="text-[#F8FEF5] font-inconsolata text-2xl font-normal leading-[45px] text-right">
          Engineer with a passion for deconstruction, web experience curation,
          <br />
          and occasional design involvement.
        </p>
      </div>
    </section>
  )
}

export default Intro

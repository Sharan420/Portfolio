//Imports:
import { TbWorldWww } from 'react-icons/tb'
import { RiJavascriptFill, RiHtml5Fill, RiCss3Fill } from 'react-icons/ri'
import { FaReact, FaFigma, FaPython } from 'react-icons/fa6'
import { IoLogoFirebase } from 'react-icons/io5'
import { DiDjango } from 'react-icons/di'
import {
  SiVite,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiKeras,
} from 'react-icons/si'
import { MdOutlineMonitor } from 'react-icons/md'
import { GiArtificialIntelligence } from 'react-icons/gi'

//Constants:
const WebDev = [
  {
    name: 'Javascript',
    icon: <RiJavascriptFill className="text-[4rem] md:text-[6rem]" />,
  },
  {
    name: 'HTML',
    icon: <RiHtml5Fill className="text-[4rem] md:text-[6rem]" />,
  },
  { name: 'CSS', icon: <RiCss3Fill className="text-[4rem] md:text-[6rem]" /> },
  { name: 'React', icon: <FaReact className="text-[4rem] md:text-[6rem]" /> },
  {
    name: 'Firebase',
    icon: <IoLogoFirebase className="text-[4rem] md:text-[6rem]" />,
  },
  { name: 'Django', icon: <DiDjango className="text-[4rem] md:text-[6rem]" /> },
  { name: 'Vite', icon: <SiVite className="text-[4rem] md:text-[6rem]" /> },
  {
    name: 'Tailwind Css',
    icon: <SiTailwindcss className="text-[4rem] md:text-[6rem]" />,
  },
]

const Design = [
  {
    name: 'Photoshop',
    icon: <SiAdobephotoshop className="text-[4rem] md:text-[6rem]" />,
  },
  {
    name: 'Illustrator',
    icon: <SiAdobeillustrator className="text-[4rem] md:text-[6rem]" />,
  },
  {
    name: 'Premiere',
    icon: <SiAdobepremierepro className="text-[4rem] md:text-[6rem]" />,
  },
  { name: 'Figma', icon: <FaFigma className="text-[4rem] md:text-[6rem]" /> },
  {
    name: 'After Effects',
    icon: <SiAdobeaftereffects className="text-[4rem] md:text-[6rem]" />,
  },
]

const AI = [
  {
    name: 'Tensorflow',
    icon: <SiTensorflow className="text-[4rem] md:text-[6rem]" />,
  },
  {
    name: 'Pytorch',
    icon: <SiPytorch className="text-[4rem] md:text-[6rem]" />,
  },
  { name: 'Numpy', icon: <SiNumpy className="text-[4rem] md:text-[6rem]" /> },
  { name: 'Python', icon: <FaPython className="text-[4rem] md:text-[6rem]" /> },
  {
    name: 'Keras',
    icon: <SiKeras className="text-[4rem] md:text-[6rem] leading-loose" />,
  },
]

//Components:
const Skills = () => {
  //Return:
  return (
    <section id="skills" className="relative min-h-[30vh] bg-background">
      <div className="waveshape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full py-20">
        <h1 className="text-[4rem] text-[#ffff] font-inconsolata font-black tracking-tight">
          Skills
        </h1>
        {/* WebDev */}
        <div className="mx-6 my-4 w-[74vw] h-full bg-secondary py-6 px-8 rounded-xl flex flex-col md:flex-row items-center justify-center gap-10">
          <span className="flex flex-col items-center text-slightoffwhite font-inconsolata w-1/5">
            <TbWorldWww className="text-[8rem]" />
            <p className="text-lg">Web Development</p>
          </span>
          <div className="w-[20vh] border-t-2 md:w-[2px] md:h-[30vh] md:border-l-2 border-slightoffwhite"></div>
          <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-8 w-4/5">
            {WebDev.map((item, index) => {
              return (
                <span
                  className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 transition-all duration-300 ease-in-out rounded-xl px-2 py-2"
                  key={index}
                >
                  {item.icon}
                  <p className="text-md md:text-lg">{item.name}</p>
                </span>
              )
            })}
          </div>
        </div>
        {/* Design */}
        <div className="mx-6 my-4 w-[74vw] h-full bg-secondary py-6 px-8 rounded-xl flex flex-col md:flex-row items-center justify-center gap-10">
          <span className="flex flex-col items-center text-slightoffwhite font-inconsolata w-1/5">
            <MdOutlineMonitor className="text-[8rem] leading-loose" />
            <p className="text-lg">Design</p>
          </span>
          <div className="w-[20vh] border-t-2 md:w-[2px] md:h-[30vh] md:border-l-2 border-slightoffwhite"></div>
          <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-8 w-4/5">
            {Design.map((item, index) => {
              return (
                <span
                  className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 transition-all duration-300 ease-in-out rounded-xl px-2 py-2"
                  key={index}
                >
                  {item.icon}
                  <p className="text-md md:text-lg text-center">{item.name}</p>
                </span>
              )
            })}
          </div>
        </div>
        {/* AI */}
        <div className="mx-6 my-4 w-[74vw] h-full bg-secondary py-6 px-8 rounded-xl flex flex-col md:flex-row items-center justify-center gap-10">
          <span className="flex flex-col items-center text-slightoffwhite font-inconsolata w-1/5">
            <GiArtificialIntelligence className="text-[8rem] leading-loose" />
            <p className="text-lg">Artificial Int</p>
          </span>
          <div className="w-[20vh] border-t-2 md:w-[2px] md:h-[30vh] md:border-l-2 border-slightoffwhite"></div>
          <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-10 w-4/5">
            {AI.map((item, index) => {
              return (
                <span
                  className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 transition-all duration-300 ease-in-out rounded-xl px-2 py-2"
                  key={index}
                >
                  {item.icon}
                  <p className="text-lg text-center">{item.name}</p>
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

//Exports:
export default Skills

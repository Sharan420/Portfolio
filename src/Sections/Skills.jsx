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

const Skills = () => {
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
      <div className="flex flex-col justify-center items-center h-full w-full py-10">
        <h1 className="text-[4rem] text-[#ffff] font-inconsolata font-black tracking-tight">
          Skills
        </h1>
        <div className="mx-6 my-4 min-w-[74vw] h-full bg-secondary py-6 px-8 rounded-xl flex flex-row items-center justify-center gap-10">
          <span className="flex flex-col items-center text-slightoffwhite font-inconsolata">
            <TbWorldWww className="text-[8rem]" />
            <p className="text-lg">Web Development</p>
          </span>
          <div className="w-[2px] h-[30vh] border-l-2 border-slightoffwhite"></div>
          <div className="grid grid-cols-5 items-center justify-center gap-8">
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <RiJavascriptFill className="text-[6rem]" />
              <p className="text-lg">Javascript</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <RiHtml5Fill className="text-[6rem]" />
              <p className="text-lg">HTML</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <RiCss3Fill className="text-[6rem]" />
              <p className="text-lg">CSS</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <FaReact className="text-[6rem]" />
              <p className="text-lg">React</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <IoLogoFirebase className="text-[6rem]" />
              <p className="text-lg">Firebase</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <DiDjango className="text-[6rem]" />
              <p className="text-lg">Django</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <SiVite className="text-[6rem]" />
              <p className="text-lg">Vite</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <SiTailwindcss className="text-[6rem]" />
              <p className="text-lg">Tailwind Css</p>
            </span>
          </div>
        </div>
        <div className="mx-6 my-4 min-w-[74vw] h-full bg-secondary py-6 px-8 rounded-xl flex flex-row items-center justify-center gap-10">
          <span className="flex flex-col items-center text-slightoffwhite font-inconsolata">
            <MdOutlineMonitor className="text-[8rem]" />
            <p className="text-lg">Design</p>
          </span>
          <div className="w-[2px] h-[30vh] border-l-2 border-slightoffwhite"></div>
          <div className="grid grid-cols-5 items-center justify-center gap-8">
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <SiAdobephotoshop className="text-[6rem]" />
              <p className="text-lg">Photoshop</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <SiAdobeillustrator className="text-[6rem]" />
              <p className="text-lg">Illustrator</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <SiAdobepremierepro className="text-[6rem]" />
              <p className="text-lg">Premiere</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <FaFigma className="text-[6rem]" />
              <p className="text-lg">Figma</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <SiAdobeaftereffects className="text-[6rem]" />
              <p className="text-lg">After Effects</p>
            </span>
          </div>
        </div>
        <div className="mx-6 my-4 min-w-[74vw] h-full bg-secondary py-6 px-8 rounded-xl flex flex-row items-center justify-center gap-10">
          <span className="flex flex-col items-center text-slightoffwhite font-inconsolata">
            <GiArtificialIntelligence className="text-[8rem]" />
            <p className="text-lg">Artificial Int</p>
          </span>
          <div className="w-[2px] h-[30vh] border-l-2 border-slightoffwhite"></div>
          <div className="flex flex-row items-center justify-center gap-10">
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl px-4">
              <SiTensorflow className="text-[6rem]" />
              <p className="text-lg">Tensorflow</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <SiPytorch className="text-[6rem]" />
              <p className="text-lg">Pytorch</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <SiNumpy className="text-[6rem]" />
              <p className="text-lg">Numpy</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl">
              <FaPython className="text-[6rem]" />
              <p className="text-lg">Python</p>
            </span>
            <span className="flex flex-col items-center text-slightoffwhite font-inconsolata hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl px-4">
              <SiKeras className="text-[6rem]" />
              <p className="text-lg">Keras</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

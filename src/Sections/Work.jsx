/* eslint-disable react/jsx-key */
//Imports:
import Traffix from '../Assets/Traffix1.png'
import Siggy from '../Assets/siggy_meta.png'
import TPA from '../Assets/TPA.png'
import {
  SiNumpy,
  SiKeras,
  SiFlask,
  SiReact,
  SiSelenium,
  SiPython,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from 'react-icons/si'
import { SlSocialGithub } from 'react-icons/sl'
import { IoIosLink } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'

//Constants:
export const Projects = [
  {
    name: 'Siggy',
    icon: [<SiFlask />, <SiSelenium />, <SiPython />, <SiReact />],
    description:
      'Siggy is a web scraping tool built with Selenium that extracts menu items from Swiggy and recommends food options tailored to your budget, making dining decisions effortless.',
    links: [
      {
        name: 'Website',
        icon: <IoIosLink />,
        link: 'https://siggy.fun',
      },
      {
        name: 'Github (Frontend)',
        icon: <SlSocialGithub />,
        link: 'https://github.com/Sharan420/siggy-frontend',
      },
    ],
    Image: Siggy,
  },
  {
    name: 'Traffix',
    icon: [<SiKeras />, <SiNumpy />, <SiPython />],
    description:
      'Keras is used to optimize traffic light timings by real-time traffic density detection, enhancing urban transportation efficiency and reducing congestion.',
    links: [
      {
        name: 'Github',
        icon: <SlSocialGithub />,
        link: 'https://github.com/Sharan420/Traffic-Classifier',
      },
      {
        name: 'Website',
        icon: <IoIosLink />,
        link: 'https://namanchandok.github.io/Traffic-Classifier/website',
      },
    ],
    Image: Traffix,
  },
  {
    name: 'Purpose Academy',
    icon: [
      <SiAdobephotoshop />,
      <SiAdobeillustrator />,
      <SiAdobepremierepro />,
    ],
    description:
      'Purpose Academy offered a dynamic and collaborative learning environment that fueled my development as a purpose-driven leader.',
    links: [
      {
        name: 'Github',
        icon: <IoIosLink />,
        link: 'https://thepurposeacademy.asia',
      },
      {
        name: 'LinkedIn',
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/company/the-purpose-academy-tpa/',
      },
    ],
    Image: TPA,
  },
]

//Components:
const Work = () => {
  //Return:
  return (
    <section
      className="hidden md:flex relative flex-col min-h-[200px] px-[11vw] pt-10 pb-[120px] bg-background items-center justify-center"
      id="work"
    >
      <h1 className="font-inconsolata text-[3.5rem] text-white font-bold pb-6">
        Projects
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center w-full">
        {/* Siggy */}
        <div
          className={
            'relative grid grid-cols-9 min-h-[200px] w-3/4 justify-start gap-3 '
          }
        >
          <img
            src={Projects[0].Image}
            className="rounded-lg aspect-auto w-[38vw] col-start-1 col-span-6 row-start-1"
          />
          <div className="col-start-6 col-span-4 z-20 text-white row-start-1 flex flex-col justify-center items-end w-full gap-2">
            <h2 className="text-4xl font-inconsolata font-bold mr-2">
              {Projects[0].name}
            </h2>
            <span className="flex flex-row gap-2 mr-2 opacity-50 w-full justify-end items-center">
              <hr className="h-px w-full bg-gray-200 border-0 " />
              {Projects[0].icon.map((item, index) => {
                return <span key={index}>{item}</span>
              })}
            </span>
            <div className="w-full pl-4 pr-8 py-4 bg-secondary rounded-sm">
              <p className="text-end text-white font-inconsolata">
                {Projects[0].description}
              </p>
            </div>
            <div className="flex flex-row gap-2 mr-2 opacity-75 mt-4 text-2xl">
              {Projects[0].links.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    {item.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        {/* Traffix */}
        <div
          className={
            'relative grid grid-cols-9 min-h-[200px] w-3/4 justify-start gap-3 '
          }
        >
          <img
            src={Projects[1].Image}
            className="rounded-lg aspect-auto w-[38vw] col-start-4 col-span-6 row-start-1"
          />
          <div className="col-start-1 col-span-4 z-20 text-white row-start-1 flex flex-col justify-center items-start w-full gap-2">
            <h2 className="text-4xl font-inconsolata font-bold mr-2">
              {Projects[1].name}
            </h2>
            <span className="flex flex-row gap-2 mr-2 opacity-50 w-full justify-start items-center">
              {Projects[1].icon.map((item, index) => {
                return <span key={index}>{item}</span>
              })}
              <hr className="h-px w-full bg-gray-200 border-0 " />
            </span>
            <div className="w-full pl-4 pr-8 py-4 bg-secondary rounded-sm">
              <p className="text-end text-white font-inconsolata">
                {Projects[1].description}
              </p>
            </div>
            <div className="flex flex-row gap-2 mr-2 opacity-75 mt-4 text-2xl">
              {Projects[1].links.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    {item.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        {/* TPA */}
        <div
          className={
            'relative grid grid-cols-9 min-h-[200px] w-3/4 justify-start gap-3 '
          }
        >
          <img
            src={Projects[2].Image}
            className="rounded-lg aspect-auto w-[38vw] col-start-1 col-span-6 row-start-1"
          />
          <div className="col-start-6 col-span-4 z-20 text-white row-start-1 flex flex-col justify-center items-end w-full gap-2">
            <h2 className="text-4xl font-inconsolata font-bold mr-2">
              {Projects[2].name}
            </h2>
            <span className="flex flex-row gap-2 mr-2 opacity-50 w-full justify-end items-center">
              <hr className="h-px w-full bg-gray-200 border-0 " />
              {Projects[2].icon.map((item, index) => {
                return <span key={index}>{item}</span>
              })}
            </span>
            <div className="w-full pl-4 pr-8 py-4 bg-secondary rounded-sm">
              <p className="text-end text-white font-inconsolata">
                {Projects[2].description}
              </p>
            </div>
            <div className="flex flex-row gap-2 mr-2 opacity-75 mt-4 text-2xl">
              {Projects[2].links.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    {item.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={'custom-shape-divider-bottom-1706648784 mt-10 mb-[-4px]'}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  )
}

//Exports:
export default Work

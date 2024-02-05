/* eslint-disable react/jsx-key */
import Traffix from '../Assets/Traffix1.png'
import Crypt from '../Assets/crypt.png'
import TPA from '../Assets/TPA.png'
import {
  SiNumpy,
  SiKeras,
  SiPython,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from 'react-icons/si'
import { SlSocialGithub } from 'react-icons/sl'
import { IoIosLink } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'

//Constants:
const Projects = [
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
    name: 'Crypt@trix',
    icon: [<SiPhp />, <SiJavascript />, <SiHtml5 />],
    description:
      'Crypt@trix is a web application to host crypthunts, a cryptic treasure hunt game, with a user-friendly interface and a secure backend.',
    links: [
      {
        name: 'Github',
        icon: <SlSocialGithub />,
        link: 'https://github.com/PyrotechClub/crypt22',
      },
    ],
    Image: Crypt,
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

const WorkMob = () => {
  return (
    <section
      className="md:hidden flex relative flex-col min-h-[200px] px-[11vw] pt-10 pb-[120px] bg-background items-center justify-center"
      id="workm"
    >
      <h1 className="font-inconsolata text-[3.5rem] text-white font-bold pb-6">
        Projects
      </h1>
      <div className="flex flex-col gap-10">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-10 grid-rows-10 items-center justify-center gap-10 min-h-[30vh] w-[74vw] h-full gap-x-4"
          >
            <div className="flex flex-col items-center justify-center gap-4 col-span-full row-start-1 z-10 bg-secondary/90 h-full rounded-xl px-6 py-6">
              <h1 className="text-[2rem] text-white font-bold text-center font-inconsolata">
                {project.name}
              </h1>
              <span className="flex flex-row text-slightoffwhite gap-2">
                {project.icon.map((icon, index) => {
                  return <span key={index}>{icon}</span>
                })}
              </span>
              <hr className="h-px w-full bg-gray-200 border-0 " />
              <p className="text-[#ffff] text-center font-inconsolata">
                {project.description}
              </p>
              <div className="flex flex-row items-center justify-center gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-2 text-white"
                  >
                    {link.icon}
                    <p className="text-[#ffff] font-inconsolata">{link.name}</p>
                  </a>
                ))}
              </div>
            </div>
            <div
              className="h-full w-full col-span-full row-start-1 rounded-xl"
              style={{
                backgroundImage: `url(${project.Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className={'custom-shape-divider-bottom-1706648784 mt-10'}>
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

export default WorkMob

import myImage from '../Assets/myImage.jpeg'
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaSpotify,
} from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const About = () => {
  return (
    <section className="h-[70vh] w-full bg-[#174305]" id="about">
      <div
        className="m-0 p-0 relative grid grid-cols-2 content-center justify-items-center h-full w-inherit "
        alt="parent"
      >
        <img
          src={myImage}
          alt="Sharan Suri"
          className="relative w-3/5 top-px rounded-2xl cols-span-1 aspect-square ml-[10rem]"
        />
        <div
          className="flex flex-col justify-start w-full cols-span-1 pr-[10rem] pt-20"
          alt="child"
        >
          <p className="text-[1rem] font-inconsolata font-normal text-white">
            <span className="font-bold text-[3rem] text-[#f0ed66] underline underline-offset-4 font-climate tracking-widest">
              Hey there, I'm Sharan Suri
            </span>
            <br />
            <br />A BTech student and passionate web developer. My project
            portfolio includes impactful solutions like the Traffic Regulator
            and Water Purity Finder. Proficient in Python, JavaScript, and
            MySQL, I thrive on crafting dynamic and efficient web applications.
            Let's innovate together!
          </p>
          <div className="pt-9 flex flex-row gap-10">
            <a
              href="https://www.linkedin.com/in/sharan-suri-9064aa167/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-[#f0ed66] text-[2.5rem]" />
            </a>
            <a
              href="https://www.instagram.com/share.sus/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-[#f0ed66] text-[2.5rem]" />
            </a>
            <a
              href="https://github.com/Sharan420"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-[#f0ed66] text-[2.5rem]" />
            </a>
            <a
              href="https://www.discordapp.com/users/400577870705197066"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord className="text-[#f0ed66] text-[2.5rem]" />
            </a>
            <a
              href="https://twitter.com/Sharan_devel"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-[#f0ed66] text-[2.5rem]" />
            </a>
            <a href="mailto:devel.sharan.2003@gmail.com">
              <IoIosMail className="text-[#f0ed66] text-[2.5rem]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

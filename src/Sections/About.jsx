import { SocialIcon } from 'react-social-icons'
import myImage from '../Assets/myImage.jpeg'
const About = () => {
  return (
    <>
      <section
        id="about"
        className="-my-px md:my-0 relative z-10 py-10 bg-secondary min-h-96"
      >
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-2 md:gap-10 ">
          <img
            src={myImage}
            alt="myImage"
            className="rounded-xl w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          />
          <div className="md:flex md:flex-col w-[80%] md:w-[50%] pt-3 md:pt-6">
            <h1 className="text-[3.5rem] text-[#ffff] font-inconsolata font-black tracking-tight">
              About Me
            </h1>
            <p className="text-[1rem] font-inconsolata font-normal text-slightoffwhite border-t-[3px] border-slightoffwhite py-2">
              A BTech student and passionate web developer. My project portfolio
              includes impactful solutions like the Traffic Regulator and Water
              Purity Finder. Proficient in Python, JavaScript, and MySQL, I
              thrive on crafting dynamic and efficient web applications.
              Let&apos;s innovate together!
            </p>
            <div className="grid grid-cols-3 gap-4 md:flex md:flex-row md:gap-4 pt-6 justify-items-center">
              <SocialIcon
                url="https://twitter.com/Sharan_devel"
                bgColor="#C5D0C9"
                fgColor="transparent"
              />
              <SocialIcon
                url="https://www.instagram.com/share.sus/"
                bgColor="#C5D0C9"
                fgColor="transparent"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/sharan-suri-9064aa167/"
                bgColor="#C5D0C9"
                fgColor="transparent"
              />
              <SocialIcon
                url="https://github.com/Sharan420"
                bgColor="#C5D0C9"
                fgColor="transparent"
              />
              <SocialIcon
                url="https://www.discord.com/users/400577870705197066"
                bgColor="#C5D0C9"
                fgColor="transparent"
              />
              <SocialIcon
                url="mailto:devel.sharan.2003@gmail.com"
                bgColor="#C5D0C9"
                fgColor="transparent"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
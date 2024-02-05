//Imports:
import { SocialIcon } from 'react-social-icons'
import myImage from '../Assets/ME.png'

//Components:
const About = () => {
  //Return:
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
            <p className="text-lg font-inconsolata font-normal text-slightoffwhite border-t-[3px] border-slightoffwhite md:pr-[10rem] py-2">
              Hey there! I&apos;m Sharan Suri, a versatile web developer,
              designer, and AI enthusiast. With a passion for creating seamless
              digital experiences, I blend technical expertise with a keen eye
              for design. Over the years, I&apos;ve honed my skills in HTML,
              CSS, JavaScript, and AI technologies, crafting innovative
              solutions that marry form and function.
            </p>
            <div className="grid grid-cols-3 gap-4 md:flex md:flex-row md:gap-4 pt-6 justify-items-center">
              <SocialIcon
                url="https://x.com/Sharan_devel"
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

//Exports:
export default About

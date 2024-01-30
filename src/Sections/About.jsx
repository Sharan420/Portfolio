import { SocialIcon } from 'react-social-icons'

const About = () => {
  return (
    <>
      <section id="about" className="relative z-10 py-10 bg-secondary">
        <div className="flex flex-row justify-center items-start gap-10 ">
          <img
            src="http://placekitten.com/350/450"
            alt="myImage"
            className="rounded-xl w-[350px] h-[450px]"
          />
          <div className="flex flex-col w-[50%] pt-6">
            <h1 className="text-[4rem] text-[#ffff] font-inconsolata font-black tracking-tight">
              About Me
            </h1>
            <p className="text-[1rem] font-inconsolata font-normal text-slightoffwhite border-t-[3px] border-slightoffwhite py-2">
              A BTech student and passionate web developer. My project portfolio
              includes impactful solutions like the Traffic Regulator and Water
              Purity Finder. Proficient in Python, JavaScript, and MySQL, I
              thrive on crafting dynamic and efficient web applications. Let's
              innovate together!
            </p>
            <div className="flex flex-row gap-4 pt-6">
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

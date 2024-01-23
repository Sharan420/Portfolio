import myImage from '../Assets/myImage.jpeg'

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
            <br />A BTech student and passionate web developer. My project
            portfolio includes impactful solutions like the Traffic Regulator
            and Water Purity Finder. Proficient in Python, JavaScript, and
            MySQL, I thrive on crafting dynamic and efficient web applications.
            Let's innovate together!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

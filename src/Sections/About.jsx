import myImage from '../Assets/myImage.jpeg'

const About = () => {
  return (
    <section className="h-[70vh] w-full bg-[#174305] ">
      <div
        className="m-0 p-0 relative grid grid-cols-2 content-center justify-items-center h-full w-inherit"
        alt="parent"
      >
        <img
          src={myImage}
          alt="Sharan Suri"
          className="relative w-1/2 top-px rounded-xl cols-span-1 aspect-square"
        />
        <div className=" w-full cols-span-1" alt="child">
          TEST
        </div>
      </div>
    </section>
  )
}

export default About

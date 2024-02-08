import { IoMdMail } from 'react-icons/io'

const Contact = () => {
  return (
    <section
      className="flex flex-col -mt-px min-h-[200px] px-[10vw] md:px-[25vw] pb-10 bg-secondary items-center justify-center w-full gap-2 md:gap-4"
      id="contact"
    >
      <h2 className="font-inconsolata text-3xl md:text-[3.2rem] text-white font-bold">
        Let&apos;s Have a Chat
      </h2>
      <p className="text-slightoffwhite font-inconsolata text-center text-sm">
        I&apos;m always open to new opportunities and collaborations. If you
        have a project in mind, or just want to chat, feel free to reach out to
        me at{' '}
      </p>
      <span className="flex flex-col items-center justify-center">
        <a
          href="mailto:devel.sharan.2003@gmail.com"
          className="text-white font-inconsolata text-center text-2xl "
        >
          <span className="flex flex-row items-center gap-4">
            <IoMdMail />
            devel.sharan.2003@gmail.com
          </span>
        </a>
        <span className="text-sm text-slightoffwhite text-center">
          New Delhi, India
        </span>
      </span>
    </section>
  )
}

export default Contact

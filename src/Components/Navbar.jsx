const Navbar = () => {
  return (
    <nav className="z-10 absolute px-11 py-6 flex justify-between items-center w-full">
      <button className="w-44 h-16 rounded-2xl border-2 border-orange-50 bg-[#66BF40]/[0.15] text-white text-2xl font-inconsolata">
        Resume
      </button>
      <div className="space-x-8 font-inconsolata text-white text-2xl">
        <a href="#about">01.About</a>
        <a href="#">02.Work</a>
        <a href="#">03.Contact</a>
      </div>
    </nav>
  )
}

export default Navbar

import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"

function Nav() {
  return (
    <nav className="flex items-center justify-between bg-black text-white px-12 py-5">
      <h1 className="text-4xl font-bold font-serif">MovieHub</h1>
      <div className="flex items-center space-x-5">
        <p className="text-xl font-semibold">Popular</p>
        <p className="text-xl font-semibold">Upcoming</p>
        <form className="flex items-center">
          <input type="text" className="text-xl bg-transparent border-b border-b-slate-300 focus:outline-none"/>
          <MagnifyingGlassIcon className="w-7 h-7"/>
        </form>
      </div>
    </nav>
  )
}

export default Nav
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"

function Nav() {
  return (
    <nav>
      <h1>KWLT</h1>
      <div>
        <p className="text-blue-800">Popular</p>
        <p>Upcoming</p>
        <form action="">
          <input type="text" />
          <MagnifyingGlassIcon/>
        </form>
      </div>
    </nav>
  )
}

export default Nav
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"

function Nav() {
  return (
    <nav>
      <h1>KWLT</h1>
      <div>
        <p>Popular</p>
        <p className="text-blue-700">Upcoming</p>
        <form action="">
          <input type="text" />
          <MagnifyingGlassIcon/>
        </form>
      </div>
    </nav>
  )
}

export default Nav
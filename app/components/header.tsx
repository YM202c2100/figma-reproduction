
function Header(){
  return(
    <header className="flex flex-col items-center h-28 justify-center md:flex-row md:justify-between">
      <div className="md:ml-12 lg:text-2xl xl:text-3xl">Site name</div>
      <nav className="flex">
        <ul className="flex items-center lg:text-2xl 2xl:text-3xl">
          <li className="mr-4">Page1</li>
          <li className="mx-4">Page2</li>
          <li className="mx-4">Page3</li>
        </ul>
        <button className="text-xs ml-3 md:mr-10 bg-black text-white px-4 py-3 rounded-md lg:text-sm xl:text-xl">Button</button>
      </nav>
    </header>
  )
}

export default Header;


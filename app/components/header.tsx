
function Header(){
  return(
    <header className="flex flex-col items-center h-28 justify-center md:flex-row md:justify-between">
      <div className="md:ml-12">Site name</div>
      <nav className="flex">
        <ul className="flex items-center">
          <li className="">Page1</li>
          <li className="ml-8">Page2</li>
          <li className="ml-8">Page3</li>
        </ul>
        <button className="text-xs ml-10 md:mr-10 bg-black text-white px-4 py-3 rounded-md">Button</button>
      </nav>
    </header>
  )
}

export default Header;


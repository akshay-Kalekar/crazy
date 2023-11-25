import React from 'react'
const Navbar = () => {
  return (
    <div className="z-20  bg-blur navbar border border-black bg-white text-black font-semibold fixed ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
       = {/* add transition */}
      </label>
      <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Marketplace</a>
          <ul className="p-2">
            <li><a>Services</a></li>
            <li><a>Influencers</a></li>
            <li><a>Mentorship</a></li>
            <li><a>Digital Products</a></li>
            <li><a>Webinars</a></li>
          </ul>
        </li>
        <li><a>Explore</a></li>
        <li><a>Community</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">EZ</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
   
      <li tabIndex={0}>
        <details>
          <summary>MarketPlace</summary>
          <ul className="p-2 bg-white text-black  ">
          <li><a>Services</a></li>
          <li><a>Influencers</a></li>
          <li><a>Mentorship</a></li>
          <li><a>Digital Products</a></li>
          <li><a>Webinars</a></li>
          </ul>
        </details>
      </li>
      <li><a>Explore</a></li>
      <li><a>Community</a></li>
    </ul>
  </div>
  <div className="navbar-end  flex gap-4">
    <a className="btn text-white bg-green-400 border-none">Become a Seller</a>
    <a className="btn text-white bg-green-400 border-none">Login</a>
  </div>
</div>
  )
}

export default Navbar
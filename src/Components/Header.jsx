import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      {/* <Navbar /> */}
      <div className="name">
        <h1>
          <span>Disha App Content</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          consequuntur facilis minima id cupiditate autem labore natus, minus
          dolorum repudiandae laboriosam voluptas facere! Quod, cum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Rem quae labore autem.
          Quasi, voluptas tempore facilis voluptates praesentium deserunt, iure
          totam consequuntur corporis maxime rem.
        </p>
        <a href="#" className="cv-btn">Read More</a>
      </div>
    </div>
  );
}

export default Header;

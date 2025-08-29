import React, { useState } from 'react'

function Header({ setUrl }) {
  const [active, setActive] = useState("users"); // default active button

  const handleClick = (name) => {
    setUrl(name);
    setActive(name);
  };

  return (
    <header id='header'>
      <div className="logo"><h3>Israr Ahmad Tech</h3></div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => handleClick("users")}
              className={active === "users" ? "active-btn" : ""}
            >
              Users
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("todos")}
              className={active === "todos" ? "active-btn" : ""}
            >
              Todos
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("posts")}
              className={active === "posts" ? "active-btn" : ""}
            >
              Posts
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("albums")}
              className={active === "albums" ? "active-btn" : ""}
            >
              Albums
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("comments")}
              className={active === "comments" ? "active-btn" : ""}
            >
              Comments
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

import React from 'react'

function Header({setUrl}) {
  
  return (
    <header id='header'>
      <div className="logo"><h3>Israr Ahmad Tech</h3></div>
      <nav>
        <ul>
          <li><button onClick={() => setUrl("users")}>Users</button></li>
          <li><button onClick={() => setUrl("todos")}>Todos</button></li>
          <li><button onClick={() => setUrl("posts")}>Posts</button></li>
          <li><button onClick={() => setUrl("albums")}>Albums</button></li>
          <li><button onClick={() => setUrl("comments")}>Comments</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
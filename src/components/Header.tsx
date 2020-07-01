import React from 'react';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a className="active" href="/">Home</a></li>
          <li><a href="/about/">About</a></li>
          <li><a href="/projects/">Projects</a></li>
        </ul>
      </nav>
    </header>
  )
}

import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul className="links">
          <li>
            <a href="mailto:daytonrjohnson@gmail.com">
              <i className="far fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/idifyable" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="http://codepen.io/idifyable/" target="_blank">
              <i className="fab fa-codepen"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/idifyable" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

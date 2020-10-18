export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <ul className="links">
          <li>
            <a href="mailto:daytonrjohnson@gmail.com">
              <i className="far fa-envelope" />
            </a>
          </li>
          <li>
            <a href="https://github.com/idifyable" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="http://codepen.io/idifyable/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-codepen" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/idifyable" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

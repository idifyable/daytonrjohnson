export const MyProjects: React.FC = () => {
  return (
    <section className="my-projects padded">
      <h3>My Projects</h3>
      <ul className="my-projects container padded">
        <li id="your-family-realty">
          <div className="image-wrapper">
            <img src="/images/content/yourfamilyrealty.jpg" alt="Your Family Realty" />
          </div>
          <div className="wrapper">
            <h1>Your Family Realty</h1>
            <h2>Technologies Used</h2>
            <ul className="bulleted">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive Design</li>
              <li>SVG</li>
            </ul>
            <div className="buttons" />
          </div>
        </li>
        <li id="wikipedia-search-page">
          <div className="image-wrapper">
            <img src="/images/content/project-wikipedia.png" alt="Wikipedia Search Page" />
          </div>
          <div className="wrapper">
            <h1>Wikipedia Search Page</h1>
            <h2>Technologies Used</h2>
            <ul className="bulleted">
              <li>jQuery</li>
              <li>Wikimedia API</li>
              <li>AJAX</li>
            </ul>
            <div className="buttons">
              <a
                href="https://idifyable.github.io/Wikipedia-Search/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">View Live</button>
              </a>
              <a
                href="https://github.com/idifyable/Wikipedia-Search"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">View Repo</button>
              </a>
            </div>
          </div>
        </li>
        <li id="animated-weather-icons">
          <div className="image-wrapper">
            <img src="/images/content/project-weather.png" alt="Animated Weather Icons" />
          </div>
          <div className="wrapper">
            <h1>Animated Weather Icons</h1>
            <h2>Technologies Used</h2>
            <ul className="bulleted">
              <li>CSS3 Animations (Keyframes/Transitions)</li>
              <li>CSS Psuedo Elements</li>
              <li>jQuery</li>
            </ul>
            <div className="buttons">
              <a
                href="https://idifyable.github.io/CSS3-Weather-Animations/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">View Live</button>
              </a>
              <a
                href="https://github.com/idifyable/CSS3-Weather-Animations"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">View Repo</button>
              </a>
            </div>
          </div>
        </li>
        <li id="quote-o-matic">
          <div className="image-wrapper">
            <img src="/images/content/project-quote.png" alt="Quote-O-Matic" />
          </div>
          <div className="wrapper">
            <h1>Quote-O-Matic</h1>
            <h2>Technologies Used</h2>
            <ul className="bulleted">
              <li>jQuery</li>
              <li>AJAX</li>
              <li>Wordpress REST API</li>
              <li>Twitter Button</li>
            </ul>
            <div className="buttons">
              <a
                href="https://idifyable.github.io/Quote-O-Matic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">View Live</button>
              </a>
              <a
                href="https://github.com/idifyable/Quote-O-Matic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">View Repo</button>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

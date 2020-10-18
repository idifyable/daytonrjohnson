import React from 'react';
import { Link } from 'react-router-dom';

export const Projects = () => {
  return (
    <section className="projects padded">
      <div className="container padded">
        <h3>My Projects</h3>
        <ul className="my-projects-preview">
          <li>
            <Link to="/projects#your-family-realty">
              <img src="/images/content/yourfamilyrealty.jpg" alt="Your Family Realty" />
              <p>Your Family Realty</p>
            </Link>
          </li>
          <li>
            <Link to="/projects#wikipedia-search-page">
              <img src="/images/content/project-wikipedia.png" alt="Wikipedia Search Page" />
              <p>Wikipedia Search Page</p>
            </Link>
          </li>
          <li>
            <Link to="/projects#animated-weather-icons">
              <img src="/images/content/project-weather.png" alt="Animated Weather Icons" />
              <p>Animated Weather Icons</p>
            </Link>
          </li>
          <li>
            <Link to="/projects#quote-o-matic">
              <img src="/images/content/project-quote.png" alt="Quote-O-Matic" />
              <p>Quote-O-Matic</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

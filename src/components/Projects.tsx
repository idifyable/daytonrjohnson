import React from 'react'

export const Projects = () => {
  return (
    <section className="projects padded">
      <div className="container padded">
        <h3>My Projects</h3>
        <ul className="my-projects-preview">
          <li>
            <a href="/projects">
              <img
                src="/images/content/yourfamilyrealty.jpg"
                alt="Your Family Realty"
              />
              <p>Your Family Realty</p>
            </a>
          </li>
          <li>
            <a href="/projects">
              <img
                src="/images/content/project-wikipedia.png"
                alt="Wikipedia Search Page"
              />
              <p>Wikipedia Search Page</p>
            </a>
          </li>
          <li>
            <a href="/projects">
              <img
                src="/images/content/project-weather.png"
                alt="Animated Weather Icons"
              />
              <p>Animated Weather Icons</p>
            </a>
          </li>
          <li>
            <a href="/projects">
              <img
                src="/images/content/project-quote.png"
                alt="Quote-O-Matic"
              />
              <p>Quote-O-Matic</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

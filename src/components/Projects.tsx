import Link from 'next/link';

export const Projects: React.FC<{}> = () => {
  return (
    <section className="projects padded">
      <div className="container padded">
        <h3>My Projects</h3>
        <ul className="my-projects-preview">
          <li>
            <Link href="/projects#your-family-realty">
              <a>
                <img src="/images/content/yourfamilyrealty.jpg" alt="Your Family Realty" />
                <p>Your Family Realty</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects#wikipedia-search-page">
              <a>
                <img src="/images/content/project-wikipedia.png" alt="Wikipedia Search Page" />
                <p>Wikipedia Search Page</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects#animated-weather-icons">
              <a>
                <img src="/images/content/project-weather.png" alt="Animated Weather Icons" />
                <p>Animated Weather Icons</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects#quote-o-matic">
              <a>
                <img src="/images/content/project-quote.png" alt="Quote-O-Matic" />
                <p>Quote-O-Matic</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;

export const WhoAmI: React.FC = () => {
  return (
    <section className="about padded">
      <div className="container">
        <img src="/images/content/portrait.jpg" alt="Dayton Johnson" />
        <div className="padded">
          <h2>Who Am I?</h2>
          <h1>Web Developer</h1>
          <p>
            Hello, I'm a web developer based in Eau Claire, Wisconsin. I'm passionate in coding and
            creating useful web-based software. I love learning new technologies and am focused on
            becoming a master of the web platform.
          </p>
          <div className="skills">
            <div>
              <p>
                <strong>Strong Skills:</strong>
              </p>
              <ul className="bulleted">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>PHP</li>
              </ul>
            </div>
            <div>
              <p>
                <strong>Growing Skills:</strong>
              </p>
              <ul className="bulleted">
                <li>TypeScript</li>
                <li>ReactJS</li>
                <li>React Mobile</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

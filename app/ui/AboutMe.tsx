import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="lg:flex lg:flex-row lg:justify-between container bg-white border-b-8">
      <Image
        src="/images/content/portrait.jpg"
        alt="Dayton Johnson"
        width={350}
        height={457}
        className="mx-auto bottom-16 relative border-8 border-white shadow-2xl shadow-black"
      />
      <div className="lg:w-3/5 px-6 py-6">
        <h3 className="text-4xl mb-6">Who Am I?</h3>
        <h2 className="text-2xl mb-6">Web Developer</h2>
        <p className="mb-6">
          Hello, I'm a web developer based in Eau Claire, Wisconsin. I'm
          passionate in coding and creating useful web-based software. I love
          learning new technologies and am focused on becoming a master of the
          web platform.
        </p>
        <div className="md:flex md:space-x-40">
          <div className="mb-3 md:mb-0">
            <p className="mb-3">
              <strong>Strong Skills:</strong>
            </p>
            <ul className="list-disc pl-4">
              <li>HTML/CSS</li>
              <li>JavaScript/TypeScript</li>
              <li>Node.js</li>
              <li>PHP</li>
            </ul>
          </div>
          <div>
            <p className="mb-3">
              <strong>Growing Skills:</strong>
            </p>
            <ul className="list-disc pl-4">
              <li>ReactJS</li>
              <li>React Native</li>
              <li>GraphQL</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

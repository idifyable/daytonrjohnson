import Image from 'next/image';
import Billboard from './ui/Billboard';
import AboutMe from './ui/AboutMe';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Billboard />
      <AboutMe />
    </main>
  );
}

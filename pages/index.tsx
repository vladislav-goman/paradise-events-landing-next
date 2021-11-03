import type { NextPage } from 'next';
import { Header } from '../src/components/layout/Header';
import { Welcome } from '../src/components/section/Welcome';
import { About } from '../src/components/section/About';
import { Packages } from '../src/components/section/Packages';
import { Contact } from '../src/components/section/Contact';
import { FAQ } from '../src/components/section/FAQ';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <About />
        <Packages />
        <Contact />
        <FAQ />
      </main>
    </>
  );
};

export default Home;

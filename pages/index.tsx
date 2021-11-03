import type { NextPage } from 'next';
import { Header } from '../src/components/layout/Header';
import { Welcome } from '../src/components/section/Welcome';
import { Contact } from '../src/components/section/Contact';
import { FAQ } from '../src/components/section/FAQ';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Contact />
        <FAQ />
      </main>
    </>
  );
};

export default Home;

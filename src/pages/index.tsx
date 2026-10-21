import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';

const Home: FC = memo(() => (
  <Page>
    <Header />
    <main>
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </Page>
));

export default Home;

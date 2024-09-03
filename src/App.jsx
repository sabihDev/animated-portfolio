import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Parallex from './components/Parallex/Parallex';
import Services from './components/Services/Services';
const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar />
      <Hero />
    </section>
    <section id='Services'><Parallex type='services'/></section>
    <section><Services/></section>
    <section id='Portfolio'><Parallex type='portfolio'/></section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;

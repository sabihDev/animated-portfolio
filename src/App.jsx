import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Parallex from './components/Parallex/Parallex';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
const App = () => {
  return <div>
    <Cursor/>
    <section id='Homepage'>
      <Navbar />
      <Hero />
    </section>
    <section id='Services'><Parallex type='services'/></section>
    <section><Services/></section>
    <section id='Portfolio'><Parallex type='portfolio'/></section>
    <Portfolio/>
    <section id='Contact'>
      <Contact/>
    </section>
  </div>;
};

export default App;

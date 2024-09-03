import './app.scss';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar />
    </section>
    <section>Parallax</section>
    <section id='Services'>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;

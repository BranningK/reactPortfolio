import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
  <div className="App">
    <Header />
    <Contact />
    {/* <Portfolio /> */}
    {/* <About /> */}
    {/* <Section /> */}
    <Footer />
  </div>
  );
}

export default App;

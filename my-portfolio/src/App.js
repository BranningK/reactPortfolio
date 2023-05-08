import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';

function App() {
  return (
  <div className="App">
    <Header />
    <About />
    {/* <Section /> */}
    <Footer />
  </div>
  );
}

export default App;

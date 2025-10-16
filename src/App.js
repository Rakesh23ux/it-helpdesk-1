import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <Dashboard />
      <Contact />
      <About />
      <Footer />

    </div>
  );
}

export default App;

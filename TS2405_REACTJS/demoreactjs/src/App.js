import './App.css';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import BackTop from './components/Footer/BackTop';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Feature from './pages/Feature';
import Testimonial from './pages/Testimonial';
import ContactUs from './pages/ContactUs';
import Fan from './pages/Fan';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about-us' Component={About} />
          <Route path='/product' Component={Product} />
          <Route path='/blog' Component={Blog} />
          <Route path='/out-features' Component={Feature} />
          <Route path='/testimonial' Component={Testimonial} />
          <Route path='/contact-us' Component={ContactUs} />
          <Route path='/fan' Component={Fan} />
        </Routes>
      </main>
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;

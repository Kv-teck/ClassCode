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
import Regsiter from './pages/Register';
import Shopping from './pages/Shopping';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import { useReducer, useState } from 'react';
import STATE from './hooks/context/initState';
import { Provider } from './hooks/context/context';
import reducer from './hooks/context/reducer';


function App() {
  const DATA = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")): STATE;
  const [state,dispatch] = useReducer(reducer,DATA);
  return (
    <Provider value={{ state,dispatch }}>
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
            <Route path='/regsiter' Component={Regsiter} />
            <Route path='/shopping' Component={Shopping} />
            <Route path='/category/:slug' Component={Category} />
            <Route path="/product/:id" Component={ProductDetail} />
          </Routes>
        </main>
        <Footer />
        <BackTop />
      </div>
    </Provider>
  );
}

export default App;

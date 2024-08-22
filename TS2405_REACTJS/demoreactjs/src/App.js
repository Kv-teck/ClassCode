import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Button/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;

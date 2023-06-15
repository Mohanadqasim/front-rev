import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Trending from './components/Trending/Trending';
import Favourite from './components/Favourite/Favourite';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favourite' element={<Favourite />}></Route>
        <Route path='/Trending' element={<Trending />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

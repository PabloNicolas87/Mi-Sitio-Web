import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import MySkills from './components/MySkills/MySkills';
import MyProjects from './components/MyProjects/MyProjects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className='principal'>
      
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={ <AboutUs /> }></Route>
              <Route path='/MySkills' element={ <MySkills /> }></Route>
              <Route path='/MyProjects' element={ <MyProjects /> }></Route>
              <Route path='/Contact' element={ <Contact /> }></Route>
            </Routes> 
          <Footer />
        </BrowserRouter>
      
    </div>
  );
}

export default App;

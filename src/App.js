import Header from './components/Header';
import AboutUs from './components/AboutUs';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
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

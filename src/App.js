import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import HomePage from './Components/Home/HomePage';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CycleProject from './Components/Projects/CycleProject';
import ElectroProject from './Components/Projects/ElectroProject';
import PhotographyProject from './Components/Projects/PhotographyProject';
import NotFound from './Components/Shared/NotFound';
import AboutMe from './Components/Home/AboutMe';

function App() {
  useEffect( () => {
    AOS.init();
  },[])
  return (
    <div className='bg-white'>
      <Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='home' element={<HomePage></HomePage>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<AboutMe></AboutMe>}></Route>
          <Route path='cycleProject' element={<CycleProject></CycleProject>}></Route>
          <Route path='electroProject' element={<ElectroProject></ElectroProject>}></Route>
          <Route path='photographyProject' element={<PhotographyProject></PhotographyProject>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;

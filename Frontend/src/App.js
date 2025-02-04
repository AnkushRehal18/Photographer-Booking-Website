import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Families from './pages/Families';
import Footer from './components/Footer';
import Couple from './pages/Couple';
import Proposals from './pages/Proposals';
import Elopments from './pages/Elopments';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Families' element={<Families/>}/>
    <Route path='/Couple' element={<Couple/>}/>
    <Route path='/Proposals' element={<Proposals/>}/>
    <Route path='/Elopments' element={<Elopments/>}/>

    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

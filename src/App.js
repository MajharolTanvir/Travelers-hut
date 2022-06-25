import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Plan from './Component/Plan/Plan';
import Login from './Component/LoginRegistration/Login/Login';

function App() {
  return (
    <div className="bg-gray-900 h-full">
    <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/plan' element={<Plan></Plan>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

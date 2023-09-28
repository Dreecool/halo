import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import Register from './pages/registerPage';
import PrivateRoute from './privateRoutes/privateComp';
import Home from './pages/home';




function App() {



  return (

    <>


    <BrowserRouter>

      <Routes>

          <Route path='/' element={<LoginPage/>}/>
          
          <Route path='/register' element={<Register/>}/>
          
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />

      </Routes>

    </BrowserRouter>

 
      
    </>

  );
}

export default App;

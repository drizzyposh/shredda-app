import { Fragment } from 'react';
import { BroswerRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import Editprofile from './pages/editprofile/Editprofile';
import Profile from './pages/profile/Profile';
import Home from './pages/Home';
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import './styles/dark.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';


function App() {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <Fragment>
      <div className={darkMode ? "app dark" : 'app'}>
       <BrowserRouter>
          <Routes>
              <Route path='/'>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route index element={<Home />} />
                <Route path='profile'>
                  <Route path=':username' element={<Profile />} />
                  <Route path=':username/edit' element={<Editprofile />} />
                </Route>
              </Route>
          </Routes>
       </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;

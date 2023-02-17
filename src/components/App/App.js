import 'normalize.css';
import './App.scss';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div className="app">
     <Header/>
     <Routes>
        <Route path='/' element={<Main/>} exact/>
        <Route path='/movies' element={<Movies/>} exact/>
        <Route path='/saved-movies' element={<SavedMovies/>} exact/>
        <Route path='/profile' element={<Profile/>} exact/>
        <Route path='/signin' element={<Login/>} exact/>
        <Route path='/signup' element={<Register/>} exact/>
     </Routes>
     <Footer/>
   </div>
  );
}

export default App;

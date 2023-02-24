import 'normalize.css';
import './App.scss';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
          exact
        />
        <Route
          path="/movies"
          element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }
          exact
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
          exact
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
          exact
        />
        <Route path="/signin" element={<Login />} exact />
        <Route path="/signup" element={<Register />} exact />
        <Route path="/404" element={<NotFound />} exact />
      </Routes>
    </div>
  );
}

export default App;

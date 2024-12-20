import { Route, Routes } from 'react-router-dom';
import FormSignUp from './form/FormSignUp';
import Home from './Home';
import Login from './Login';
import GameList from './GameList';
import Profil from './Profil';
import Book from './Book';

function Router() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<FormSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<Profil />} />
        <Route path="/book" element={<Book />} />
        <Route path="/games" element={<GameList />} />
        <Route path="*"/>
      </Routes>
    );
}

export default Router;
import './App.scss';
import { Link, NavLink, Routes, Route } from 'react-router-dom';
import { FindNewFriend } from './components/FindNewFriend';
import { MyFriends } from './components/MyFriends';
import { HomePage } from './components/HomePage';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header__logo-title">
          <Link to="/" className="logo"></Link>
          <h1 className="header__title">friendbook</h1>
        </div>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              'nav__button' + (isActive ? ' nav__button--active' : '')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/mf"
            className={({ isActive }) =>
              'nav__button' + (isActive ? ' nav__button--active' : '')
            }
          >
            My friends
          </NavLink>
          <NavLink
            to="/fnf"
            className={({ isActive }) =>
              'nav__button' + (isActive ? ' nav__button--active' : '')
            }
          >
            Find new friend
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/fnf" element={<FindNewFriend />} />
        <Route path="/mf" element={<MyFriends />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;

import { useState } from 'react';
import { UserCard } from './components/UserCard';

import './App.scss';
import { FilterForm } from './components/FilterForm';

export function getPeopleFromLocalStorage() {
  return JSON.parse(localStorage.getItem('randomPeople'));
}

const App = () => {
  const [randomUsers, setRandomUsers] = useState(getPeopleFromLocalStorage());

  // eslint-disable-next-line no-unused-vars
  const getNewPeople = (count = 15) => {
    const randomUserURL = `https://randomuser.me/api//?results=${count}`;

    fetch(randomUserURL)
      .then((response) => response.json())
      .then((response) => {
        setRandomUsers(response.results);
        localStorage.setItem('randomPeople', JSON.stringify(response.results));
      });
  };

  return (
    <div className="App">
      <header className="header">
        <FilterForm setRandomUsers={setRandomUsers} />
      </header>
      <main className="main">
        <UserCard randomUsers={randomUsers} />
      </main>
    </div>
  );
};

export default App;

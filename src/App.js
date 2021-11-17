import { useEffect, useState } from 'react';
import { UserCard } from './components/UserCard';

import './App.scss';

const App = () => {
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    const randomUserURL = 'https://randomuser.me/api//?results=15';

    fetch(randomUserURL)
      .then((response) => response.json())
      .then((response) => setRandomUsers(response.results));
  }, []);

  return (
    <div className="App">
      <UserCard randomUsers={randomUsers} />
    </div>
  );
};

export default App;

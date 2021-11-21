import { useEffect, useState } from 'react';
import { UserCard } from './components/UserCard';
import './App.scss';
import { FilterForm } from './components/FilterForm';
import { ExtraButtons } from './components/ExtraButtons';

export function getPeopleFromLocalStorage() {
  return JSON.parse(localStorage.getItem('randomPeople'));
}

function getFilteredPeopleFromLocalStorage() {
  return JSON.parse(localStorage.getItem('filteredPeople'));
}

const App = () => {
  const [loadNewUsers, setLoadNewUsers] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = useState(15);
  const [randomUsers, setRandomUsers] = useState(
    getFilteredPeopleFromLocalStorage() || getPeopleFromLocalStorage() || []
  );

  useEffect(() => {
    if (!randomUsers.length || loadNewUsers) {
      const randomUserURL = `https://randomuser.me/api/?results=${numberOfUsers}&inc=gender,email,dob,name,picture,nat,phone`;

      fetch(randomUserURL)
        .then((response) => response.json())
        .then((response) => {
          setRandomUsers(response.results);
          localStorage.setItem(
            'randomPeople',
            JSON.stringify(response.results)
          );
          localStorage.setItem(
            'filteredPeople',
            JSON.stringify(response.results)
          );
        });

      setLoadNewUsers(false);
    }
  }, [loadNewUsers]);

  return (
    <div className="App">
      <main className="main">
        <div className="main__left-bar">
          <FilterForm setRandomUsers={setRandomUsers} />
        </div>

        <div className="main__users">
          <UserCard randomUsers={randomUsers} />
        </div>
      </main>

      <footer className="footer">
        <ExtraButtons
          numberOfUsers={numberOfUsers}
          setNumberOfUsers={setNumberOfUsers}
          setLoadNewUsers={setLoadNewUsers}
        />
      </footer>
    </div>
  );
};

export default App;

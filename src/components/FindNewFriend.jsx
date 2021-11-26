import { useEffect, useState } from 'react';
import {
  getFilteredPeopleFromLocalStorage,
  getPeopleFromLocalStorage,
} from '../server/getFromServer';
import {
  postFilteredPeopleToLocalStorage,
  postPeopleToLocalStorage,
} from '../server/postToServer';
import { ExtraButtons } from './ExtraButtons';
import { FilterForm } from './FilterForm';
import { UserCard } from './UserCard';

export const FindNewFriend = () => {
  const [loadNewUsers, setLoadNewUsers] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = useState(50);
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
          postPeopleToLocalStorage(response.results);
          postFilteredPeopleToLocalStorage(response.results);
        });

      setLoadNewUsers(false);
    }
  }, [loadNewUsers]);

  return (
    <>
      <main className="main">
        <div className="main__left-bar">
          <FilterForm setRandomUsers={setRandomUsers} />
        </div>

        <div className="main__users">
          <UserCard
            users={randomUsers}
            setUsers={setRandomUsers}
            button={'add friend'}
          />
        </div>
      </main>

      <footer className="footer">
        <ExtraButtons
          numberOfUsers={numberOfUsers}
          setNumberOfUsers={setNumberOfUsers}
          setLoadNewUsers={setLoadNewUsers}
        />
      </footer>
    </>
  );
};

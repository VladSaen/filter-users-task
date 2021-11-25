import { Link } from 'react-router-dom';
import {
  getFilteredPeopleFromLocalStorage,
  getMyFriends,
  getPeopleFromLocalStorage,
} from '../server/getFromServer';
import {
  postFilteredPeopleToLocalStorage,
  postMyFriendToLocalStorage,
  postPeopleToLocalStorage,
} from '../server/postToServer';

export const UserCard = ({ users, setUsers, button }) => {
  const handleAddFriend = (user) => {
    const people = getPeopleFromLocalStorage().filter(
      (person) => person.email !== user.email
    );
    const filteredPeople = getFilteredPeopleFromLocalStorage().filter(
      (person) => person.email !== user.email
    );
    const myFriends = getMyFriends() || [];
    myFriends.push(user);

    postPeopleToLocalStorage(people);
    postFilteredPeopleToLocalStorage(filteredPeople);
    postMyFriendToLocalStorage(myFriends);

    setUsers(filteredPeople);
  };

  return (
    <>
      {users.map((user) => (
        <div className="card" key={user.email}>
          <img
            className="card__user-photo"
            src={user.picture.large}
            alt={user.name.first}
            draggable={false}
          />

          <div className="card__user-info">
            <b className="card__name">
              {`${user.name.first} ${user.name.last}`}
            </b>

            <a className="card__email" href={`mailto:${user.email}`}>
              {user.email}
            </a>

            <a className="card__phone" href={`tel:+${user.phone}`}>
              {user.phone}
            </a>
            <div className="card__dob">
              {`${user.dob.date.substr(0, 10)}, (${user.dob.age} y.o.)`}
            </div>

            {button === 'add friend' && (
              <button
                onClick={() => handleAddFriend(user)}
                className="button button__user-card"
              >
                Add to friends
              </button>
            )}

            {button === 'open chat' && (
              <Link
                to="/messages"
                className="button button__user-card"
              >
                Send message
              </Link>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

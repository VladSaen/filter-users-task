import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMyFriends } from '../server/getFromServer';
import { UserCard } from './UserCard';

export const MyFriends = () => {
  const [myFriends, setMyFriends] = useState(getMyFriends() || []);

  return (
    <main className="main">
      <div className="main__left-bar">
        {myFriends.length ? (
          <>
          </>
        ) : (
          <Link to="/fnf" className="button button__no-friends">
            Find your friends first
          </Link>
        )}
      </div>

      <div className="main__users">
        <UserCard
          users={myFriends}
          setUsers={setMyFriends}
          button={'open chat'}
        />
      </div>
    </main>
  );
};

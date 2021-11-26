import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMyFriends } from '../server/getFromServer';
import { ChatBoard } from './ChatBoard';
import { MessageCard } from './MessageCard';

export const Messages = () => {
  const myFriends = getMyFriends() || [];
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedChat, setSelectedChat] = useState({});

  useEffect(() => {
    if (selectedUser === '') {
      return;
    }

    setSelectedChat(myFriends.find((person) => person.email === selectedUser));
  }, [selectedUser]);

  return (
    <main className="main">
      <div className="main__left-bar">
        {myFriends.length ? (
          <MessageCard
            myFriends={myFriends}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        ) : (
          <Link to="/fnf" className="button button__no-friends">
            Find friends to start a conversation
          </Link>
        )}
      </div>

      {myFriends.length !== 0 && <ChatBoard selectedChat={selectedChat} />}
    </main>
  );
};

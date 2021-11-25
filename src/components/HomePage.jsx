import { useState } from 'react';

export const HomePage = () => {
  const [name, setName] = useState('John Doe');
  const [avatar, setAvatar] = useState('');

  return (
    <main className="main">
      <div className="profile">
        <img
          className="profile__avatar"
          src={avatar || 'https://abroad.ru/images/new_abroad/no-avatar.png'}
          alt="avatar"
          draggable={false}
        />

        <h1 className="profile__name">{name}</h1>
      </div>
    </main>
  );
};

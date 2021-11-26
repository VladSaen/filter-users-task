import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAvatar, getMyFriends, getName } from '../server/getFromServer';
import { postAvatar, postName } from '../server/postToServer';

export const HomePage = () => {
  const [name, setName] = useState(getName() || '');
  const [avatar, setAvatar] = useState(getAvatar() || '');
  const [registePage, setRegisterPage] = useState(() => (name ? false : true));

  const handleSubmit = () => {
    setRegisterPage(false);
    postName(name || 'Jhon Doe');
    postAvatar(avatar || 'https://fn.zhirkiller.com/wp-content/uploads/2018/09/no-avatar.png');
  };

  return (
    <main className="main">
      {registePage ? (
        <form onSubmit={(event) => event.preventDefault()} className="profile">
          <label className="label" htmlFor="avatarURL">
            Insert the URL path to the desired avatar
            <input
              value={avatar}
              onChange={(event) => setAvatar(event.target.value)}
              type="url"
              name="avatarURL"
              id="avatarURL"
            />
          </label>

          <label className="label" htmlFor="profileName">
            Write the desired nickname
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              name="profileName"
              id="profileName"
            />
          </label>

          <button className="button" onClick={() => handleSubmit()}>
            Save
          </button>
        </form>
      ) : (
        <div className="profile">
          <img
            className="profile__avatar"
            src={avatar || 'https://abroad.ru/images/new_abroad/no-avatar.png'}
            alt="avatar"
            draggable={false}
          />

          <h1 className="profile__name">{name}</h1>

          <Link to="/mf" className="button button__profile">
            {`Friends: ${getMyFriends()?.length || 0}`}
          </Link>
        </div>
      )}
    </main>
  );
};

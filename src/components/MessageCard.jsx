import classNames from 'classnames';

export const MessageCard = ({ myFriends, selectedUser, setSelectedUser }) => {
  return (
    <>
      {myFriends.map((user) => (
        <div
          key={user.email}
          className={classNames('message-card', {
            'message-card--active': selectedUser === user.email,
          })}
          onClick={() => setSelectedUser(user.email)}
        >
          <img
            className="message-card__photo"
            src={user.picture.thumbnail}
            alt={user.name.first}
            draggable={false}
          />
          <b className="message-card__name">
            {user.name.first}
            <br />
            {user.name.last}
          </b>
        </div>
      ))}
    </>
  );
};

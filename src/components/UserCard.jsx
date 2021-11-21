export const UserCard = ({ randomUsers }) => {
  return (
    <>
      {randomUsers.map((user) => (
        <div className="card" key={user.email}>
          <img
            className="card__user-photo"
            src={user.picture.large}
            alt={user.name.first}
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
          </div>
        </div>
      ))}
    </>
  );
};

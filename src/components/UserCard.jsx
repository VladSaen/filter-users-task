export const UserCard = ({ randomUsers }) => {
  return (
    <>
      {randomUsers.map((user) => (
        <div className="card" key={user.email}>
          <img src={user.picture.large} alt={user.name.first} />

          <b className="card__name">
            {`${user.name.first} ${user.name.last}`}
          </b>

          {`Gender: ${user.gender}`}
          <a className="card__email" href={`mailto:${user.email}`}>
            {user.email}
          </a>
          {user.dob.date.substr(0, 10)}
          <br />
          {user.nat}
        </div>
      ))}
    </>
  );
};

export const UserCard = ({ randomUsers }) => {
  return (
    <main className="main">
      {randomUsers.map((user) => (
        <div className="card" key={user.id}>
          <img src={user.picture.large} alt={user.name.first} />

          <b className="card__name">
            {`${user.name.first} ${user.name.last}`}
          </b>

          {`Gender: ${user.gender}`}
          <a className="card__email" href={`mailto:${user.email}`}>{user.email}</a>
          <a href={`tel:+${user.phone}`}>{user.phone}</a>
          {user.nat}
        </div>
      ))}
      {console.log(randomUsers)}
    </main>
  );
};

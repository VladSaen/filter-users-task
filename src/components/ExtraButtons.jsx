export const ExtraButtons = ({
  numberOfUsers,
  setNumberOfUsers,
  setLoadNewUsers,
}) => {
  return (
    <div className="extra-buttons">
      <label className="label" htmlFor="numder-of-users">
        How many users to download
        <input
          type="number"
          id="numder-of-users"
          max="50"
          value={numberOfUsers}
          onChange={(event) => {
            if (event.target.value >= 50) {
              setNumberOfUsers(50);
            } else if (event.target.value > 0) {
              setNumberOfUsers(event.target.value);
            }
          }}
        />
      </label>

      <button onClick={() => setLoadNewUsers(true)}>Load new users</button>
    </div>
  );
};

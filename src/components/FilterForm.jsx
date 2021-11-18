import { useState } from "react";
import { getPeopleFromLocalStorage } from "../App";

export const FilterForm = ({ setRandomUsers }) => {
  const [filterByGender, setFilterByGender] = useState('all');
  const [filterByNationality, setFilterByNationality] = useState('all');

  const filterUsers = (gender, nationality) => {
    if (gender === 'all' && nationality === 'all') {
      setRandomUsers(getPeopleFromLocalStorage());
    }

    const storage = getPeopleFromLocalStorage();

    if (gender !== 'all' && nationality !== 'all') {
      setRandomUsers(
        storage.filter(
          (user) => user.gender === gender && user.nat === nationality
        )
      );
    } else if (gender !== 'all') {
      setRandomUsers(storage.filter((user) => user.gender === gender));
    } else if (nationality !== 'all') {
      setRandomUsers(storage.filter((user) => user.nat === nationality));
    }
  };

  return (
    <form
      className="filter-form"
      onSubmit={(event) => event.preventDefault()}
    >
      {console.log('form render')}
      <label className="filter-form__label" htmlFor="filterByGender">
        gender
        <select
          value={filterByGender}
          onChange={(event) => setFilterByGender(event.target.value)}
          name="gender"
          id="filterByGender"
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label className="filter-form__label" htmlFor="filterByNationality">
        nationality
        <select
          value={filterByNationality}
          onChange={(event) => setFilterByNationality(event.target.value)}
          name="nationality"
          id="filterByNationality"
        >
          <option value="all">All</option>
          <option value="AU">AU</option>
          <option value="BR">BR</option>
          <option value="CA">CA</option>
          <option value="CH">CH</option>
          <option value="DE">DE</option>
          <option value="DK">DK</option>
          <option value="ES">ES</option>
          <option value="FI">FI</option>
          <option value="FR">FR</option>
          <option value="GB">GB</option>
          <option value="IE">IE</option>
          <option value="IR">IR</option>
          <option value="NO">NO</option>
          <option value="NL">NL</option>
          <option value="NZ">NZ</option>
          <option value="TR">TR</option>
          <option value="US">US</option>
        </select>
      </label>

      <button
        onClick={() => filterUsers(filterByGender, filterByNationality)}
      >
        Apply filters
      </button>
    </form>
  );
}
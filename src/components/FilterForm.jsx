import { useState } from 'react';
import { getPeopleFromLocalStorage } from '../App';

export const FilterForm = ({ setRandomUsers }) => {
  const [filterByGender, setFilterByGender] = useState('all');
  const [filterByNationality, setFilterByNationality] = useState([]);

  const handleAddFilterByNationality = (value) => {
    if (!filterByNationality.find((nat) => nat === value)) {
      setFilterByNationality([...filterByNationality, value]);
    }

    if (filterByNationality.find((nat) => nat === value)) {
      const result = filterByNationality;
      const index = result.indexOf(value);
      result.splice(index, 1);
      setFilterByNationality(result);
    }
  };

  const filterUsers = (gender, nationality) => {
    setFilterByGender('all');
    setFilterByNationality([]);

    if (gender === 'all' && !nationality.length) {
      setRandomUsers(getPeopleFromLocalStorage());

      return;
    }

    const storage = getPeopleFromLocalStorage();
    const result = [];

    if (gender !== 'all' && nationality.length) {
      const genderUsers = storage.filter((user) => user.gender === gender);

      for (let i = 0; i < genderUsers.length; i++) {
        for (let y = 0; y < nationality.length; y++) {
          if (genderUsers[i].nat === nationality[y]) {
            result.push(genderUsers[i]);
          }
        }
      }

      setRandomUsers(result);
      localStorage.setItem('filteredPeople', JSON.stringify(result));

      return;
    } else if (gender !== 'all') {
      setRandomUsers(storage.filter((user) => user.gender === gender));
      localStorage.setItem(
        'filteredPeople',
        JSON.stringify(storage.filter((user) => user.gender === gender))
      );
    } else if (nationality.length) {
      for (let i = 0; i < storage.length; i++) {
        for (let y = 0; y < nationality.length; y++) {
          if (storage[i].nat === nationality[y]) {
            result.push(storage[i]);
          }
        }
      }

      setRandomUsers(result);
      localStorage.setItem('filteredPeople', JSON.stringify(result));
    }
  };

  return (
    <form className="filter-form" onSubmit={(event) => event.preventDefault()}>
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
          multiple
          value={filterByNationality}
          onChange={(event) => handleAddFilterByNationality(event.target.value)}
          name="nationality"
          id="filterByNationality"
        >
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

      <button onClick={() => filterUsers(filterByGender, filterByNationality)}>
        Apply filters
      </button>

      <button
        onClick={() => {
          const storage = getPeopleFromLocalStorage();
          setRandomUsers(storage);
          localStorage.setItem('filteredPeople', JSON.stringify(storage));
        }}
      >
        Clear filter
      </button>
    </form>
  );
};
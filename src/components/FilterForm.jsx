import { useState } from 'react';
import { getPeopleFromLocalStorage } from '../server/getFromServer';
import { postFilteredPeopleToLocalStorage } from '../server/postToServer';

export const FilterForm = ({ setRandomUsers }) => {
  const [filterByGender, setFilterByGender] = useState('all');
  const [filterByNationality, setFilterByNationality] = useState([]);
  const [filterByAgeFrom, setFilterByAgeFrom] = useState(18);
  const [filterByAgeTo, setFilterByAgeTo] = useState(90);

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

  const filterUsers = (gender, nationality, from, to) => {
    setFilterByGender('all');
    setFilterByNationality([]);

    if (
      gender === 'all' &&
      nationality.length === 0 &&
      +from === 18 &&
      +to === 90
    ) {
      setRandomUsers(getPeopleFromLocalStorage());

      return;
    }

    const storage = getPeopleFromLocalStorage().filter(
      (user) => user.dob.age > +from && user.dob.age < +to
    );
    const result = [];

    if (+from !== 18 || +to !== 90) {
      setRandomUsers(storage);
      postFilteredPeopleToLocalStorage(storage);
    }

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
      postFilteredPeopleToLocalStorage(result);

      return;
    } else if (gender !== 'all') {
      setRandomUsers(storage.filter((user) => user.gender === gender));
      postFilteredPeopleToLocalStorage(
        storage.filter((user) => user.gender === gender)
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
      postFilteredPeopleToLocalStorage(result);
    }
  };

  return (
    <form className="filter-form" onSubmit={(event) => event.preventDefault()}>
      <b className="filter-form__categorie-title">Categories</b>

      <label className="filter-form__label" htmlFor="filterByGender">
        <b>Gender</b>
        <select
          value={filterByGender}
          onChange={(event) => setFilterByGender(event.target.value)}
          name="gender"
          id="filterByGender"
          className="filter-form__select"
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label className="filter-form__label" htmlFor="filterByNationality">
        <b>Nationality</b>
        <select
          multiple
          size="5"
          value={filterByNationality}
          onChange={(event) => handleAddFilterByNationality(event.target.value)}
          name="nationality"
          id="filterByNationality"
          className="filter-form__select"
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
        <button className="button" onClick={() => setFilterByNationality([])}>
          Clear nationality filter
        </button>
      </label>

      <label className="filter-form__label" htmlFor="filterByAge">
        <b>Age</b>
        <div className="from-to">
          <input
            className="filter-form__fromTo"
            value={filterByAgeFrom}
            type="number"
            name="age-from"
            id="filterByAge"
            onChange={(event) => {
              if (event.target.value >= 0) {
                setFilterByAgeFrom(event.target.value);
              }

              if (event.target.value >= filterByAgeTo) {
                setFilterByAgeFrom(filterByAgeTo - 1);
              }
            }}
          />
          —
          <input
            className="filter-form__fromTo"
            value={filterByAgeTo}
            type="number"
            name="age-to"
            id="filterByAge"
            onChange={(event) => {
              if (event.target.value >= 0) {
                setFilterByAgeTo(event.target.value);
              }

              if (event.target.value <= filterByAgeFrom) {
                setFilterByAgeTo(+filterByAgeFrom + 1);
              }

              if (event.target.value >= 90) {
                setFilterByAgeTo(90);
              }
            }}
          />
        </div>
      </label>

      <button
        className="button"
        onClick={() =>
          filterUsers(
            filterByGender,
            filterByNationality,
            filterByAgeFrom,
            filterByAgeTo
          )
        }
      >
        Apply filters
      </button>

      <button
        className="button"
        onClick={() => {
          const storage = getPeopleFromLocalStorage();
          setRandomUsers(storage);
          localStorage.setItem('filteredPeople', JSON.stringify(storage));
          setFilterByGender('all');
          setFilterByNationality([]);
        }}
      >
        Clear filter
      </button>
    </form>
  );
};

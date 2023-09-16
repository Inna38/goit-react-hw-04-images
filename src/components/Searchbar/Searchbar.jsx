import { useState } from 'react';

import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

export const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      Notiflix.Notify.failure('Please enter your request');
      return;
    }
    onSearch(value);

    setValue('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          name="name"
          value={value}
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};


import css from './Button.module.css';

import PropTypes from 'prop-types';

export const Button = ({ loadBtnClick }) => {
  return (
    <button type="button" onClick={loadBtnClick} className={css.button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadBtnClick: PropTypes.func.isRequired,
};

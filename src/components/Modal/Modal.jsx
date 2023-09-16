import { useEffect } from 'react';

import PropTypes from 'prop-types';

import css from './Modal.module.css';

export const Modal = ({ largeImageURL, handleModal }) => {
  useEffect(() => {
    const handlerKeyClose = e => {
      if (e.code === 'Escape') {
        handleModal();
      }
    };

    window.addEventListener('keydown', handlerKeyClose);

    return () => [window.removeEventListener('keydown', handlerKeyClose)];
  }, [handleModal]);

  const handlerBackdrop = e => {
    if (e.target === e.currentTarget) {
      handleModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handlerBackdrop}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};


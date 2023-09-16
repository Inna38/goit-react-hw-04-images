import css from './ImageGalleryItem.module.css';

import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImg,
}) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.image}
        onClick={() => onClickImg(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

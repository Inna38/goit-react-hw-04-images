import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

export const ImageGallery = ({ data, onClickImg }) => {
  return (
    <ul className={css.ImageGallery}>
      {data &&
        data.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClickImg={onClickImg}
          />
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onClickImg: PropTypes.func.isRequired,
};

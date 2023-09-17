import { useEffect, useState } from 'react';

import axios from 'axios';
import Notiflix from 'notiflix';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

const KEY_API = '38479410-4fdece6f7b350d5238491f06f';
const BASE_URL = 'https://pixabay.com/api/';

export const App = () => {
  const [searchElement, setSearchElement] = useState('');
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalHits, setTotalHits] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (searchElement) {
      try {
        (async () => {
          const { data } = await axios.get(
            `${BASE_URL}?key=${KEY_API}&q=${searchElement}&image_type=photo&per_page=12&page=${page}`
          );

          setItem(prev => [...prev, ...data.hits]);
          setIsLoader(false);
          setTotalHits(data.totalHits);
          setTotal(data.total);

          if (data.hits.length === 0) {
            setIsLoader(false);

            Notiflix.Notify.info('Not found');
            return;
          }
        })();
      } catch (error) {
        console.log(error);
      }
    }
  }, [page, searchElement]);

  const loadBtnClick = async () => {
    setIsLoader(true);
    setPage(prev => prev + 1);
  };

  const handleSearch = searchElement => {
    setItem([]);
    setSearchElement(searchElement);
    setIsLoader(true);
    setPage(1);
    setTotalHits(null);
    setTotal(null);
  };

  const handleModal = largeImageURL => {
    setIsShowModal(prev => !prev);
    setLargeImageURL(largeImageURL);
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />

      {item ? <ImageGallery data={item} onClickImg={handleModal} /> : ''}

      {isLoader && <Loader />}

      {isShowModal && (
        <Modal largeImageURL={largeImageURL} handleModal={handleModal} />
      )}

      {totalHits !== total && !isLoader ? (
        <Button loadBtnClick={loadBtnClick} />
      ) : (
        ''
      )}
    </>
  );
};

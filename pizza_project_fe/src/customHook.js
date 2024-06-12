import { useEffect, useState } from 'react';
import { customLocalStorage } from './utils';

const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => JSON.parse(customLocalStorage.getItem(key)));

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.detail.key === key) {
        setValue(JSON.parse(event.detail.value));
      }
    };

    window.addEventListener('localStorageChanged', handleStorageChange);

    // Cleanup event listener khi component unmount
    return () => {
      window.removeEventListener('localStorageChanged', handleStorageChange);
    };
  }, [key]);

  const setItemToLocalStorage = (newValue) => {
    setValue(newValue);
    customLocalStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeItemFromLocalStorage = () => {
    setValue(null);
    customLocalStorage.removeItem(key);
  };

  return [value, setItemToLocalStorage, removeItemFromLocalStorage];
};

export default useLocalStorage;

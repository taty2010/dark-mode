import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initalValue) =>{
const [value, setValue] = useLocalStorage(key, initalValue);
useEffect(() =>{
    const body = document.querySelector('body');
    return value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
}, [value]);

  return [value, setValue ]
}

export default useDarkMode
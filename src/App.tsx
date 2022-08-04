import Wordle from './components/Wordle';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (!window.localStorage.getItem('WORDLE_VICTORYS')) {
      window.localStorage.setItem('WORDLE_VICTORYS', '0');
    }
    if (!window.localStorage.getItem('WORDLE_PLAYS')) {
      window.localStorage.setItem('WORDLE_PLAYS', '0');
    }
    if (!window.localStorage.getItem('WORDLE_INFO')) {
      window.localStorage.setItem('WORDLE_INFO', 'false');
    }
  }, []);

  return (
    <>
      <Wordle />
    </>
  );
};

export default App;

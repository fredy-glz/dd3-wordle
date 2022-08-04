import Board from './Board';
import Header from './Header';
import Keyboard from './Keyboard';
import { useState, useEffect } from 'react';
import { useWindow } from '../hooks/useWindow';
import { Key } from '../types/types';
import { checkLetter } from '../utils/checkLetter';
import StaticsModal from './StaticsModal';
import { HowPlayModal } from './HowPlayModal';
import { getWord, isValidWord } from '../service/request';

const Wordle = () => {
  const [solution, setSolution] = useState<string>('');
  const [validWord, setValidWord] = useState(false);
  const [currentWord, setCurrentWord] = useState<string>('');
  const [completedWords, setCompletedWords] = useState<string[]>([...Array(5)]);
  const [turn, setTurn] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [usedKeys, setUsedKeys] = useState({});
  const [showStaticsModal, setShowStaticsModal] = useState<boolean>(false);
  const [showHowPlayModal, setShowHowPlayModal] = useState<boolean>(false);

  const handleKeyup = (event: KeyboardEvent): void => {
    const key: string = event.key.toUpperCase();
    handleKeyPressed(key);
  };

  const handleKeyPressed = async (key: string) => {
    if (key === Key.ENTER) {
      if (turn < 7 && currentWord.length === 5) {
        const valid: any = await isValidWord(currentWord);
        if (!valid) {
          setValidWord(true);
          return;
        }
        setValidWord(false);
        addCompletedWords();
      }
    }

    if (key === Key.BACKSPACE) {
      setCurrentWord(currentWord.slice(0, -1));
    }

    if (/^[A-Z]$/.test(key) && currentWord.length < 5) {
      setCurrentWord(currentWord + key);
    }
  };

  const addCompletedWords = () => {
    if (currentWord === solution) {
      setIsCorrect(true);
    }
    setCompletedWords((prevWords) => {
      const newWords: string[] = [...prevWords];
      newWords[turn] = currentWord;
      return newWords;
    });
    setTurn(turn + 1);
    setUsedKeys((prevUsedKeys: string[]) => {
      let newKeys: any = { ...prevUsedKeys };
      currentWord.split('').forEach((l, i) => {
        if (newKeys[l] !== 'green') {
          newKeys[l] = checkLetter(l, i, solution);
        }
      });

      return newKeys;
    });
    setCurrentWord('');
  };

  const handleClean = (): void => {
    setValidWord(false);
    setCurrentWord('');
    setCompletedWords([...Array(5)]);
    setTurn(0);
    setIsCorrect(false);
    setUsedKeys({});
  };

  useWindow('keydown', handleKeyup, isCorrect, turn);

  if (isCorrect) {
    const victorys: number | string | null =
      window.localStorage.getItem('WORDLE_VICTORYS');
    let newVictorys: number = (victorys && parseInt(victorys) + 1) || 0;
    window.localStorage.setItem('WORDLE_VICTORYS', newVictorys?.toString());

    const plays: number | string | null =
      window.localStorage.getItem('WORDLE_PLAYS');
    let newPlays = (plays && parseInt(plays) + 1) || 0;
    window.localStorage.setItem('WORDLE_PLAYS', newPlays?.toString());

    setTimeout(() => {
      setShowStaticsModal(true);
      handleClean();
    }, 1000);
  }

  if (turn > 4) {
    const plays: number | string | null =
      window.localStorage.getItem('WORDLE_PLAYS');
    let newPlays: number = (plays && parseInt(plays) + 1) || 0;
    window.localStorage.setItem('WORDLE_PLAYS', newPlays?.toString());

    setTimeout(() => {
      setShowStaticsModal(true);
      handleClean();
    }, 1000);
  }

  if (currentWord.length < 5 && validWord) {
    setValidWord(false);
  }

  const handleGetWord = async () => {
    const word = await getWord();
    setSolution(word.toUpperCase());
  };

  useEffect(() => {
    handleGetWord();

    const infoValue = window.localStorage.getItem('WORDLE_INFO');
    if (infoValue) {
      if (JSON.parse(infoValue) === false) {
        setShowHowPlayModal(true);
        window.localStorage.setItem('WORDLE_INFO', 'true');
      }
    }
  }, []);

  return (
    <div className="dark:bg-slate-800 lg:h-screen h-full border border-transparent">
      <Header
        setShowHowPlayModal={setShowHowPlayModal}
        setShowStaticsModal={setShowStaticsModal}
      />
      {validWord && <p className="block text-center my-2">Is'n a valid word</p>}
      <Board
        currentWord={currentWord}
        completedWords={completedWords}
        solution={solution}
        turn={turn}
      />
      <Keyboard usedKeys={usedKeys} handleKeyPressed={handleKeyPressed} />
      {showStaticsModal && (
        <StaticsModal
          turn={turn}
          solution={solution}
          handleGetWord={handleGetWord}
          setShowStaticsModal={setShowStaticsModal}
        />
      )}
      {showHowPlayModal && (
        <HowPlayModal setShowHowPlayModal={setShowHowPlayModal} />
      )}
    </div>
  );
};

export default Wordle;

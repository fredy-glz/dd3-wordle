import '../styles/row.css';
import { checkLetter } from '../utils/checkLetter';

type RowProps = {
  word?: string;
  currentWord?: string;
  solution?: string;
};

const Row = ({ word, currentWord, solution }: RowProps) => {
  if (word) {
    const arr_word = word.split('');
    return (
      <div className="flex justify-center">
        {arr_word.map((letter: string, i: number) => (
          <div
            className={`bg-${
              solution && checkLetter(letter, i, solution)
            } border dark:border-slate-800 m-1 rounded box text-white text-4xl font-bold text-center`}
            key={i}
          >
            {letter}
          </div>
        ))}
      </div>
    );
  }

  if (currentWord) {
    let letters: string[] = currentWord.split('');

    return (
      <div className="flex justify-center">
        {letters.map((l, i) => (
          <div
            key={i}
            className="border dark:border-slate-800 dark:text-white m-1 rounded box text-4xl font-bold text-center"
          >
            {l}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div
            key={i}
            className="border dark:border-slate-800 m-1 rounded box"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="border m-1 rounded box dark:border-slate-800"></div>
      <div className="border m-1 rounded box dark:border-slate-800"></div>
      <div className="border m-1 rounded box dark:border-slate-800"></div>
      <div className="border m-1 rounded box dark:border-slate-800"></div>
      <div className="border m-1 rounded box dark:border-slate-800"></div>
    </div>
  );
};

export default Row;

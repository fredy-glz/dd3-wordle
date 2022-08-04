import { keys } from '../utils/keys';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/keyboard.css';
import { Key } from '../types/types';

type KeyboardProps = {
  usedKeys: {
    [key: string]: any;
  };
  handleKeyPressed: any;
};

const Keyboard = ({ usedKeys, handleKeyPressed }: KeyboardProps) => {
  const handleEnter = () => {
    handleKeyPressed(Key.ENTER);
  };

  const handleBackspace = () => {
    handleKeyPressed(Key.BACKSPACE);
  };

  const handleKey = (e: any) => {
    handleKeyPressed(e.target.textContent);
  };

  console.log(usedKeys);

  return (
    <div className="flex justify-center keyboard__container mx-auto flex-wrap rounded-md py-8 px-5 mt-14 dark:bg-slate-700">
      {Array.from(Array(10)).map((_, i) => (
        <button
          className={`bg-${
            usedKeys[keys[i]]
          } keyboard__key m-1 rounded-md text-center font-bold text-lg px-4 dark:bg-slate-500 dark:text-slate-200`}
          key={i}
          onClick={handleKey}
        >
          {keys[i]}
        </button>
      ))}
      <div className="ml-8">
        {Array.from(Array(10)).map((_, i) => (
          <button
            className={`bg-${
              usedKeys[keys[i + 10]]
            } keyboard__key m-1 rounded-md text-center font-bold text-lg dark:bg-slate-500 dark:text-slate-200`}
            key={i + 10}
            onClick={handleKey}
          >
            {keys[i + 10]}
          </button>
        ))}
      </div>
      <button
        className="keyboard__key--enter px-4 m-1 rounded-md text-center font-bold text-lg dark:bg-slate-500 dark:text-slate-200"
        onClick={handleEnter}
      >
        ENTER
      </button>
      {Array.from(Array(7)).map((_, i) => (
        <button
          className={`bg-${
            usedKeys[keys[i + 20]]
          } dark:bg-slate-500 keyboard__key m-1 rounded-md text-center font-bold text-lg dark:text-slate-200`}
          key={i + 20}
          onClick={handleKey}
        >
          {keys[i + 20]}
        </button>
      ))}
      <button
        className="keyboard__key--delete px-6 mr-10 m-1 rounded-md text-center font-bold text-lg dark:bg-slate-500 dark:text-slate-200"
        onClick={handleBackspace}
      >
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </div>
  );
};

export default Keyboard;

import '../styles/staticsmodal.css';
import { useEffect, useState } from 'react';

type StaticsModalProps = {
  turn: number;
  solution: string;
  handleGetWord: any;
  setShowStaticsModal: any;
};

const StaticsModal = ({
  setShowStaticsModal,
  handleGetWord,
  solution,
}: StaticsModalProps) => {
  const [victorys, setVictorys] = useState<number>(0);
  const [plays, setPlays] = useState<number>(0);

  const handleShowStaticsModal = (): void => {
    handleGetWord();
    setShowStaticsModal((prev: boolean) => {
      return !prev;
    });
  };

  useEffect(() => {
    const v: string | null = window.localStorage.getItem('WORDLE_VICTORYS');
    const p: string | null = window.localStorage.getItem('WORDLE_PLAYS');
    if (v) {
      setVictorys(parseInt(v) / 2);
    }
    if (p) {
      setPlays(parseInt(p) / 2);
    }
  }, []);

  return (
    <div className="bg-slate-100/75 dark:bg-slate-800/75 w-screen h-screen fixed justify-center items-center top-0 left-0 flex">
      <div className="border-2 border-black modal bg-slate-100 rounded-lg py-12 dark:bg-slate-800 dark:border-white dark:border">
        <h2 className="text-center text-3xl font-bold  dark:text-white">
          Estadísticas
        </h2>
        <div className="flex justify-around my-12">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-center my-3 dark:text-white">
              {plays}
            </span>
            <p className="text-center dark:text-white">Jugadas</p>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-center my-3 dark:text-white">
              {victorys}
            </span>
            <p className="text-center dark:text-white">Victorias</p>
          </div>
        </div>
        <p className="text-center my-10 dark:text-white">
          La palabra era:{' '}
          <span className="uppercase font-bold dark:text-white">
            {solution}
          </span>
        </p>
        <p className="uppercase text-center my-3 dark:text-white">
          Siguiente palabra
        </p>
        <span className="text-center font-bold block text-xl"></span>
        <button
          className="mx-auto block rounded px-20 bg-green my-7 font-bold text-2xl py-1"
          onClick={handleShowStaticsModal}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default StaticsModal;

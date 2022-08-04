import '../styles/howtoplaymodal.css';

type HeaderProps = {
  setShowHowPlayModal: any;
};

export const HowPlayModal = ({ setShowHowPlayModal }: HeaderProps) => {
  const handleShowHowToPlayModal = (): void => {
    setShowHowPlayModal((prev: boolean) => {
      return !prev;
    });
  };
  return (
    <div className="bg-slate-100/75 dark:bg-slate-800/75 w-screen h-screen fixed justify-center items-center top-0 left-0 flex">
      <div className="border-2 border-black bg-slate-100 dark:bg-slate-800 dark:border-white dark:border info__modal rounded-lg px-8 py-8">
        <h2 className="font-bold text-3xl text-center py-4 dark:text-white">
          Cómo jugar
        </h2>
        <p className="text-base">
          <span className="block my-4 dark:text-white">
            Adivina la palabra oculta en cinco intentos.
          </span>
          <span className="block my-4 dark:text-white">
            Cada intento debe ser una palabra válida de 5 letras.
          </span>
          <span className="block my-4 dark:text-white">
            Después de cada intento el color de las letras cambia para mostrar
            qué tan cerca estás de acertar la palabra.
          </span>
        </p>
        <span className="text-base font-bold block my-4 dark:text-white">
          Ejemplos
        </span>
        <div className="flex justify-evenly">
          <div className="border-black info__box border info__box--green rounded my-4 text-4xl text-center font-bold dark:text-white">
            G
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            A
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            T
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            O
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            S
          </div>
        </div>
        <p className="block my-4 text-base dark:text-white">
          La letra <span className="font-bold">G</span> está en la palabra y en
          la posición correcta.
        </p>
        <div className="flex justify-evenly">
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            v
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            O
          </div>
          <div className="border-black info__box border info__box--yellow rounded my-4 text-4xl text-center font-bold dark:text-white">
            C
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            A
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            L
          </div>
        </div>
        <p className="block my-4 text-base dark:text-white">
          La letra <span className="font-bold">C</span> está en la palabra pero
          en la posición incorrecta.
        </p>
        <div className="flex justify-evenly">
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            C
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            A
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            N
          </div>
          <div className="border-black info__box border bg-white rounded my-4 text-4xl text-center font-bold dark:bg-slate-800 dark:text-white dark:border-white">
            T
          </div>
          <div className="border-black info__box border info__box--gray rounded my-4 text-4xl text-center font-bold dark:text-white">
            O
          </div>
        </div>
        <p className="block my-4 text-base dark:text-white">
          La letra <span className="font-bold">O</span> no está en la palabra.
        </p>
        <p className="block my-4 dark:text-white">
          Puede haber letras repetidas. Las pistas son independientes para cada
          letra.
        </p>
        <p className="block my-6 text-center dark:text-white">
          ¡Una palabra nueva cada 5 minutos!
        </p>
        <button
          className="info__box--green text-white mx-auto block rounded py-2 font-bold text-2xl px-14"
          onClick={handleShowHowToPlayModal}
        >
          ¡JUGAR!
        </button>
      </div>
    </div>
  );
};

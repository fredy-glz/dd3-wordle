import {
  faChartColumn,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/header.css';
import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

type HeaderProps = {
  setShowHowPlayModal: any;
  setShowStaticsModal: any;
};

const Header = ({ setShowHowPlayModal, setShowStaticsModal }: HeaderProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const [setTheme, colorTheme] = useDarkMode();

  const handleHowToPlayModal = () => {
    setShowHowPlayModal((prev: boolean) => {
      return !prev;
    });
  };

  const handleStaticsModal = () => {
    setShowStaticsModal((prev: boolean) => {
      return !prev;
    });
  };

  const handleDarkMode = () => {
    setIsSelected(!isSelected);
    setTheme(colorTheme);
  };

  return (
    <div className="flex header__container mx-auto items-center rounded-md justify-between p-4 my-14 dark:bg-slate-700">
      <div className="text-xl header__icon dark:text-slate-200" onClick={handleHowToPlayModal}>
        <FontAwesomeIcon icon={faCircleQuestion} />
      </div>
      <p className="font-bold text-3xl dark:text-slate-200">WORDLE</p>
      <div className="text-xl header__icon flex dark:text-slate-200">
        <FontAwesomeIcon onClick={handleStaticsModal} icon={faChartColumn} />
        <div
          className={` ${
            isSelected ? 'bg-green-600' : 'bg-gray-600'
          } flex w-10 h-5  rounded-full transition-all duration-500 ml-3`}
          onClick={handleDarkMode}
        >
          <span
            className={`${
              isSelected && 'ml-5'
            } h-5 w-5 bg-white rounded-full transition-all duration-500 shadow-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

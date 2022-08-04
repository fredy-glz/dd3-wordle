import Row from './Row';

type BoardProps = {
  currentWord: string;
  completedWords: string[];
  solution: string,
  turn: number;
};
const Board = ({ currentWord, completedWords, solution, turn }: BoardProps) => {
  return (
    <div>
      {completedWords.map((word, i) => {
        if(turn === i) {
          return <Row key={i} currentWord={currentWord} />
        }
        return <Row key={i} word={word} solution={solution} />;
      })}
    </div>
  );
};

export default Board;

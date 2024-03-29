import * as React from "react";
import RecordFetchLadder from "./RecordFetchLadder";
import RecordFetchGuess from "./RecordFetchGuess";
import RecordFetchMatchups from "./RecordFetchMatchups";
import RecordFetchPuzzle from "./RecordFetchPuzzle";

interface IRecordFetchProps {
  game: string;
  level: string;
  semester: string;
  session: string;
}

const RecordFetch: React.FunctionComponent<IRecordFetchProps> = ({
  game,
  semester,
  session,
  level,
}) => {
  return (
    <div className="w-[80%] bg-white rounded-md px-14 py-8 mt-10">
      {game === "quiz ladder" && <RecordFetchLadder />}

      {game === "image guessing" && <RecordFetchGuess />}

      {game === "match ups" && <RecordFetchMatchups />}

      {game === "slide puzzle" && <RecordFetchPuzzle />}
    </div>
  );
};

export default RecordFetch;

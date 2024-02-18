import * as React from "react";

interface ITableModalFetchProps {
  top3: number;
  top10: number;
  played: number;
  highest: number;
  correct: number;
  wrong: number;
}

const TableModalFetch: React.FunctionComponent<ITableModalFetchProps> = ({
  played,
  top10,
  top3,
  highest,
  correct,
  wrong,
}) => {
  return (
    <>
      <div className="mt-10 flex items-center justify-between px-10 gap-x-10">
        <div className="space-y-3 flex-col flex items-center justify-center h-[40px]">
          <p className="font-semibold capitalize text-dark">played</p>
          <p className="text-xl font-medium">{played}</p>
        </div>
        <span className="h-10 w-[2px] bg-gray-300"></span>

        <div className="space-y-3 flex-col flex items-center justify-center h-[40px]">
          <p className="font-semibold capitalize text-dark">top 3</p>
          <p className="text-xl font-medium">{top3}</p>
        </div>
        <span className="h-10 w-[2px] bg-gray-300"></span>

        <div className="space-y-3 flex-col flex items-center justify-center h-[40px]">
          <p className="font-semibold capitalize text-dark">top 10</p>
          <p className="text-xl font-medium">{top10}</p>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between px-10 gap-x-10">
        <div className="space-y-3 flex-col flex items-center justify-center h-[40px]">
          <p className="font-semibold capitalize text-dark text-center">highest score</p>
          <p className="text-xl font-medium">{highest}</p>
        </div>
        <span className="h-10 w-[2px] bg-gray-300"></span>

        <div className="space-y-3 flex-col flex items-center justify-center h-[40px]">
          <p className="font-semibold text-center capitalize text-dark">
            correct answer
          </p>
          <p className="text-xl font-medium">{correct}</p>
        </div>
        <span className="h-10 w-[2px] bg-gray-300"></span>

        <div className="space-y-3 flex-col flex items-center justify-center h-[40px]">
          <p className="font-semibold capitalize text-dark text-center">
            wrong answer
          </p>
          <p className="text-xl font-medium">{wrong}</p>
        </div>
      </div>
    </>
  );
};

export default TableModalFetch;

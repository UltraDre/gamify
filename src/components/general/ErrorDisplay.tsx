import * as React from "react";

interface IErrorDisplayProps {
  errText: string;
}

const ErrorDisplay: React.FunctionComponent<IErrorDisplayProps> = ({
  errText,
}) => {
  return (
    <div className="absolute shadow-md rounded-md overflow-hidden z-[99] text-xl bg-white top-20 right-20 flex">
      <div className="h-[10] w-2.5 bg-red-500"></div>
      <p className="px-6 py-5 text-red-500">{errText}</p>
    </div>
  );
};

export default ErrorDisplay;

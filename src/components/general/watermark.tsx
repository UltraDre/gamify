import * as React from "react";

interface IWatermarkProps {}

const Watermark: React.FunctionComponent<IWatermarkProps> = (props) => {
  return (
    <div className="absolute inset-0">
      <div className="left-10 top-10 absolute">
        <p className="text-xl font-medium">
          Gamification in smart classroom BY OLALEKAN SAHEEB Q. 15/69/0096
        </p>
      </div>

      <div className="right-10 bottom-10 absolute">
        <p className="text-xl font-medium">
          Gamification in smart classroom BY OLALEKAN SAHEEB Q. 15/69/0096
        </p>
      </div>
    </div>
  );
};

export default Watermark;

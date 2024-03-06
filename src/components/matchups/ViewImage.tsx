import Image from "next/image";
import * as React from "react";

interface IViewImageProps {
  toggleShow: () => void;
  imageUrl: string;
}

const ViewImage: React.FunctionComponent<IViewImageProps> = ({
  toggleShow,
  imageUrl,
}) => {
  return (
    <div
      className="fixed z-50 -top-2 inset-0 bg-black bg-opacity-90 flex justify-center items-center"
      onClick={toggleShow}
    >
      <div className="w-[700px] h-[700px] bg-white rounded-md overflow-hidden">
        <Image src={imageUrl} alt="image" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default ViewImage;

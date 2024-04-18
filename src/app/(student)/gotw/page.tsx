"use client";
import GameOfTheWeek from "@/components/general/GameOfTheWeek";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Gotw = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  const id_name = Cookies.get("id_name");
  const desc = Cookies.get("description");
  const image = Cookies.get("image");

  useEffect(() => {
    if (id_name && desc && image) {
      setIsReady(true);
    }
  }, [id_name, desc, image]);

  return (
    <>
      {isReady && (
        <GameOfTheWeek game_link={id_name} game_name={desc} game_img={image} />
      )}
    </>
  );
};

export default Gotw;

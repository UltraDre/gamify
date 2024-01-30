"use client";
import GtiGame from "@/components/gti/GtiGame";
import GtiRules from "@/components/gti/GtiRules";
import React, { useState } from "react";

const Gti = () => {
  const [start, setStart] = useState(false);

  const startFunc = () => {
    setStart(true);
  };

  const endStartFunc = () => {
    setStart(false);
  };

  return (
    <>
      {!start && <GtiRules startFunc={startFunc} />}
      <GtiGame />
    </>
  );
};

export default Gti;

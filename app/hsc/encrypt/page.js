"use client";

import React, { useState } from "react";
import InfEncryptHSC from "@/components/hsc/encrypt";

import * as Unicons from "@iconscout/react-unicons";

export default function EncryptHSC() {
  return (
    <main className="bg-black p-8 lg:p-32 flex flex-col lg:flex-row w-full h-full lg:h-screen items-center justify-center">
      <InfEncryptHSC />
      <EncryptionFieldHSC />
    </main>
  );
}

const mapping = {
  A: ["BU", "CP", "AV", "AH", "BT", "BS", "CQ"],
  B: ["AT"],
  C: ["DL", "BK", "AU"],
  D: ["BV", "DY", "DM", "AI"],
  E: [
    "DK",
    "CO",
    "AW",
    "BL",
    "AA",
    "CR",
    "BM",
    "CS",
    "AF",
    "AG",
    "BO",
    "BN",
    "BE",
  ],
  F: ["BW", "CM", "CN"],
  G: ["DN", "BJ"],
  H: ["AS", "CL", "CK"],
  I: ["DJ", "BI", "AX", "CJ", "AB", "BP", "CU", "CT"],
  J: ["BX"],
  K: ["DI"],
  L: ["AR", "BH", "CI", "AJ"],
  M: ["DH", "BG", "AY"],
  N: ["BY", "DG", "DF", "CH", "AC", "BR", "DU", "DT"],
  O: ["DZ", "BF", "DX", "AK", "CG", "BQ", "DR"],
  P: ["BZ", "DE", "AZ"],
  Q: ["DD"],
  R: ["AQ", "DC", "DQ", "AL", "CE", "CF", "CV", "DS"],
  S: ["AP", "AN", "AO", "CD", "DW", "DV"],
  T: ["CD", "DB", "DP", "CC", "AD", "CY", "CW", "CX", "AE"],
  U: ["CA", "AM", "BA"],
  V: ["BB"],
  W: ["CZ"],
  X: ["BD"],
  Y: ["DO", "DA"],
  Z: ["BC"],
};

function engineEncryptHSC(text, mapping) {
  const encryptedText = text
    .toUpperCase()
    .split("")
    .map((char) => {
      if (mapping[char]) {
        const startEncrypting = mapping[char];
        const randomIndex = Math.floor(Math.random() * startEncrypting.length);
        return startEncrypting[randomIndex];
      } else {
        return char;
      }
    })
    .join("");
  return encryptedText;
}

function EncryptionFieldHSC() {
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const handleEncryption = () => {
    const encrypted = engineEncryptHSC(inputText, mapping);
    setEncryptedText(encrypted);
  };

  return (
    <main className="bg-zinc-100 p-8 flex flex-col gap-8 items-start justify-center w-full lg:w-[30%] h-full rounded-t-none rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl">
      <p className="text-zinc-900 font-bold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
        Provide your key here ..
      </p>
      <div className="flex flex-row gap-4 w-full items-center justify-between">
        <input
          className="transition-all bg-zinc-800 hover:bg-zinc-700 px-8 py-4 w-[80%] lg:w-full rounded-2xl text-zinc-100 font-medium text-sm lg:text-base leading-relaxed tracking-tight"
          type="text"
          placeholder="Input any words .."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="transition-all bg-zinc-800 hover:bg-zinc-700 flex flex-row gap-2 items-center justify-center w-[20%] lg:w-auto px-4 py-4 rounded-2xl text-zinc-100 font-medium text-sm lg:text-base leading-relaxed tracking-tight"
          onClick={handleEncryption}
        >
          <Unicons.UilArrowRight className="flex lg:hidden" size="18" />
          <Unicons.UilArrowRight className="hidden lg:flex" size="20" />
        </button>
      </div>
      <p className="bg-zinc-200 px-8 py-4 w-full rounded-2xl text-zinc-900 font-bold text-sm lg:text-base leading-relaxed tracking-tight overflow-auto">
        Encryption results ..
        <br />
        <br />{" "}
        <span className="font-medium text-sm lg:text-base leading-relaxed tracking-tight overflow-auto">
          {encryptedText}
        </span>
      </p>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import InfDecryptHSC from "@/components/hsc/decrypt";

import * as Unicons from "@iconscout/react-unicons";

export default function DecryptHSC() {
  return (
    <main className="bg-black p-8 lg:p-32 flex flex-col lg:flex-row w-full h-full lg:h-screen items-center justify-center">
      <InfDecryptHSC />
      <DecryptionFieldHSC />
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

function engineDecryptHSC(text, mapping) {
  const decryptedText = text
    .match(/.{1,2}/g)
    .map((pair) => {
      for (const key in mapping) {
        if (mapping[key].includes(pair)) {
          return key;
        }
      }
      return pair;
    })
    .join("");
  return decryptedText;
}

function DecryptionFieldHSC() {
  const [inputText, setInputText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleDecryption = () => {
    const decrypted = engineDecryptHSC(inputText, mapping);
    setDecryptedText(decrypted);
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
          onClick={handleDecryption}
        >
          <Unicons.UilArrowRight className="flex lg:hidden" size="18" />
          <Unicons.UilArrowRight className="hidden lg:flex" size="20" />
        </button>
      </div>
      <p className="bg-zinc-200 px-8 py-4 w-full rounded-2xl text-zinc-900 font-bold text-sm lg:text-base leading-relaxed tracking-tight overflow-auto">
        Decryption results ..
        <br />
        <br />{" "}
        <span className="font-medium text-sm lg:text-base leading-relaxed tracking-tight overflow-auto">
          {decryptedText}
        </span>
      </p>
    </main>
  );
}

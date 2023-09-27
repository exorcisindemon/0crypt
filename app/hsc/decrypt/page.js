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

function DecryptionMapping() {
  const mapping = {};
}

function DecryptionFieldHSC() {
  return (
    <main className="bg-zinc-100 p-8 flex flex-col gap-8 items-start justify-center w-full lg:w-[30%] h-full rounded-t-none rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl">
      <h1 className="text-zinc-900 font-bold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
        Enter Keywords ..
      </h1>
      <div className="flex flex-row gap-4 w-full items-center justify-between">
        <input
          className="transition-all bg-zinc-800 hover:bg-zinc-700 px-8 py-4 w-[80%] lg:w-full rounded-2xl text-zinc-100 font-medium text-sm lg:text-base leading-relaxed tracking-tight"
          type="text"
          placeholder="Input any words .."
        />
        <button className="transition-all bg-zinc-800 hover:bg-zinc-700 flex flex-row gap-2 items-center justify-center w-[20%] lg:w-auto px-4 py-4 rounded-2xl text-zinc-100 font-medium text-sm lg:text-base leading-relaxed tracking-tight">
          <Unicons.UilArrowRight className="flex lg:hidden" size="18" />
          <Unicons.UilArrowRight className="hidden lg:flex" size="20" />
        </button>
      </div>
      <h1 className="bg-zinc-200 px-8 py-4 w-full rounded-2xl text-zinc-900 font-bold text-sm lg:text-base leading-relaxed tracking-tight">
        Decryption results ..
      </h1>
    </main>
  );
}

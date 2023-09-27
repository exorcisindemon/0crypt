import Link from "next/link";

import * as Unicons from "@iconscout/react-unicons";

export default function InfDecryptHSC() {
  return (
    <main className="bg-zinc-900 p-8 flex flex-col gap-8 items-start justify-center w-full lg:w-[30%] h-full rounded-t-2xl rounded-b-none lg:rounded-l-2xl lg:rounded-r-none">
      <h1 className="text-purple-300 font-bold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
        Homophonic Substitution Cipher Decryption
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between">
        <Link
          className="transition-all bg-zinc-800 hover:bg-zinc-700 flex flex-row gap-2 items-center justify-center lg:justify-start w-full lg:w-auto px-8 py-4 rounded-2xl text-zinc-100 font-medium text-sm lg:text-base leading-relaxed tracking-tight"
          href="/"
        >
          <Unicons.UilArrowLeft className="flex lg:hidden" size="18" />
          <Unicons.UilArrowLeft className="hidden lg:flex" size="20" />
          Back
        </Link>
        <Link
          className="transition-all bg-zinc-800 hover:bg-zinc-700 flex flex-row gap-2 items-center justify-center lg:justify-start w-full lg:w-auto px-8 py-4 rounded-2xl text-zinc-100 font-medium text-sm lg:text-base leading-relaxed tracking-tight"
          href="/hsc/encrypt"
        >
          <Unicons.UilAsterisk className="flex lg:hidden" size="18" />
          <Unicons.UilAsterisk className="hidden lg:flex" size="20" />
          Encrypt
        </Link>
      </div>
    </main>
  );
}

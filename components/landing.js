import Link from "next/link";

import * as Unicons from "@iconscout/react-unicons";

export default function Landing() {
  return (
    <div className="bg-zinc-900 p-8 flex flex-col gap-8 items-start justify-center w-full lg:w-[30%] h-full rounded-2xl">
      <h1 className="text-purple-300 flex flex-row gap-2 lg:gap-4 items-center font-bold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
        <Unicons.UilBracketsCurly className="flex lg:hidden" size="28" />
        <Unicons.UilBracketsCurly className="hidden lg:flex" size="40" />
        0crypt
      </h1>
      <p className="text-zinc-300 font-semibold text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight">
        0Crypt is an encryption and decryption application that employs
        homophonic substitution cipher techniques to secure your text messages
        with a high level of security. This application is designed with a focus
        on safeguarding your sensitive data, ensuring that only designated
        recipients can read the encrypted messages.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between">
        <Link
          className="transition-all bg-zinc-800 hover:bg-zinc-700 flex flex-row gap-2 items-center justify-center lg:justify-start w-full lg:w-auto px-8 py-4 rounded-2xl text-zinc-100 font-medium text-sm lg:text-base leading-relaxed tracking-tight"
          href="/hsc/encrypt"
        >
          <Unicons.UilAsterisk className="flex lg:hidden" size="18" />
          <Unicons.UilAsterisk className="hidden lg:flex" size="20" />
          Encrypt
        </Link>
        <Link
          className="transition-all bg-zinc-800 hover:bg-zinc-700 flex flex-row gap-2 items-center justify-center lg:justify-start w-full lg:w-auto px-8 py-4 rounded-2xl text-zinc-100 font-medium text-sm lg:text-base leading-relaxed tracking-tight"
          href="/hsc/decrypt"
        >
          <Unicons.UilKeyholeSquare className="flex lg:hidden" size="18" />
          <Unicons.UilKeyholeSquare className="hidden lg:flex" size="20" />
          Decrypt
        </Link>
      </div>
    </div>
  );
}

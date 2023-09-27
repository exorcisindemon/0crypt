import Link from "next/link";

import * as Unicons from "@iconscout/react-unicons";
import Landing from "@/components/landing";

export default function ZeroCrypt() {
  return (
    <main className="bg-black p-8 lg:p-32 flex flex-col lg:flex-row w-full h-screen items-center justify-center">
      <Landing />
    </main>
  );
}

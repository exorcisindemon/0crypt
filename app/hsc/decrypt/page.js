import DecryptHSC from "@/components/hsc/decrypt";
import EngineDecryptionHSC from "@/utilities/hsc/engineDecryption";

export default function ZeroCrypt() {
  return (
    <main className="bg-black p-8 lg:p-32 flex flex-col lg:flex-row w-full h-full lg:h-screen items-center justify-center">
      <DecryptHSC />
      <EngineDecryptionHSC />
    </main>
  );
}

import EncryptHSC from "@/components/hsc/encrypt";
import EngineEncryptionHSC from "@/utilities/hsc/engineEncryption";

export default function ZeroCrypt() {
  return (
    <main className="bg-black p-8 lg:p-32 flex flex-col lg:flex-row w-full h-full lg:h-screen items-center justify-center">
      <EncryptHSC />
      <EngineEncryptionHSC />
    </main>
  );
}

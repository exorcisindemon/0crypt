export default function TableGuide() {
  const data = [
    { plaintext: "A", ciphertext: "BU, CP, AV, AH, BT, BS, CQ" },
    { plaintext: "B", ciphertext: "AT" },
    { plaintext: "C", ciphertext: "DL, BK, AU" },
    { plaintext: "D", ciphertext: "BV, DY, DM, AI" },
    {
      plaintext: "E",
      ciphertext: "DK, CO, AW, BL, AA, CR, BM, CS, AF, AG, BO, BN, BE",
    },
    { plaintext: "F", ciphertext: "BW, CM, CN" },
    { plaintext: "G", ciphertext: "DN, BJ" },
    { plaintext: "H", ciphertext: "AS, CL, CK" },
    { plaintext: "I", ciphertext: "DJ, BI, AX, CJ, AB, BP, CU, CT" },
    { plaintext: "J", ciphertext: "BX" },
    { plaintext: "K", ciphertext: "DI" },
    { plaintext: "L", ciphertext: "AR, BH, CI, AJ" },
    { plaintext: "M", ciphertext: "DH, BG, AY" },
    { plaintext: "N", ciphertext: "BY, DG, DF, CH, AC, BR, DU, DT" },
    { plaintext: "O", ciphertext: "DZ, BF, DX, AK, CG, BQ, DR" },
    { plaintext: "P", ciphertext: "BZ, DE, AZ" },
    { plaintext: "Q", ciphertext: "DD" },
    { plaintext: "R", ciphertext: "AQ, DC, DQ, AL, CE, CF, CV, DS" },
    { plaintext: "S", ciphertext: "AP, AN, AO, CD, DW, DV" },
    { plaintext: "T", ciphertext: "CD, DB, DP, CC, AD, CY, CW, CX, AE" },
    { plaintext: "U", ciphertext: "CA, AM, BA" },
    { plaintext: "V", ciphertext: "BB" },
    { plaintext: "W", ciphertext: "CZ" },
    { plaintext: "X", ciphertext: "BD" },
    { plaintext: "Y", ciphertext: "DO, DA" },
    { plaintext: "Z", ciphertext: "BC" },
  ];

  return (
    <div className="bg-zinc-100 p-8 flex flex-col gap-8 items-start justify-center w-full lg:w-[30%] h-full rounded-t-none rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl">
      <div className="flex flex-col gap-2 items-start">
        <p className="text-zinc-900 font-bold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
          Guide
        </p>
        <p className="text-zinc-700 font-semibold text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight">
          This is a table that contains pairs of plaintext and ciphertext, which
          are used in the process of encryption or decryption.
        </p>
      </div>
      <div className="overflow-auto">
        <table>
          <thead>
            <tr>
              <th className="text-start pr-2 pb-2 text-zinc-900 font-bold text-sm lg:text-base leading-relaxed tracking-tight">
                Plaintext
              </th>
              <th className="text-start pb-2 text-zinc-900 font-bold text-sm lg:text-base leading-relaxed tracking-tight">
                Ciphertext
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="text-start font-medium text-sm lg:text-base leading-relaxed tracking-tight">
                  {item.plaintext}
                </td>
                <td className="text-start font-medium text-sm lg:text-base leading-relaxed tracking-tight">
                  {item.ciphertext}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

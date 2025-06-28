import Image from "next/image";
import { relative } from "path";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-[160px] bg-gradient-to-r from-[#ffffff] to-[#B49758]">
        <Image
          src = "/1._Primary_Shield.png"
          alt = "EUCF Logo Top Bar"
          width={100}
          height={120}
        />
      </div>
    </div>
  );
}

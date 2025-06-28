import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="h-[5000px] font-[family-name:var(--font-jetbrains-mono)]">
      <div className="flex w-full h-[160px] items-center justify-between bg-gradient-to-r from-[#ffffff] to-[#B49758] px-5 py-1">
        <Image
          src = "/1._Primary_Shield.png"
          alt = "EUCF Logo Top Bar"
          width={110}
          height={120}
        />
        <div className="w-[500px] h-full px-5 py-7 text-center font-bold text-[#ffffff] text-[50px]">
          Esports at UCF
        </div>
        <Image
          src = "/1._Primary_Shield.png"
          alt = "EUCF Logo Top Bar"
          width={110}
          height={120}
        />
      </div>
      <div className="w-full h-[50px] bg-[#B49758] items-center justify-between sticky top-0 z-10 px-1 py-2">
        <Button variant="link">
          About Us
        </Button>
        <Button variant="link">
          Teams
        </Button>
        <Button variant="link">
          Staff/Officers
        </Button>
        <Button variant="link">
          The Dungeon
        </Button>
        <Button variant="link">
          Contact Info
        </Button>
      </div>
    </div>
  );
}

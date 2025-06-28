import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="bg-[#000000] font-[family-name:var(--font-jetbrains-mono)]">
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
      <div className="flex w-full h-[50px] bg-[#B49758] items-center justify-center sticky top-0 z-10 px-1 py-1 gap-x-3">
          <Button variant="link" asChild>
            <a href="#about-us">About Us</a>
          </Button>
          <Button variant="link" asChild>
            <a href="#teams">Teams</a>
          </Button>
          <Button variant="link" asChild>
            <a href="#staff">Staff/Officers</a>
          </Button>
          <Button variant="link" asChild>
            <a href="#dungeon">The Dungeon</a>
          </Button>
          <Button variant="link" asChild>
            <a href="#contact">Contact Info</a>
          </Button>
      </div>
        <main className="space-y-16 p-8">
        <section id="about-us" className="h-screen scroll-mt-[210px] pt-4">
          <h2 className="text-3xl font-bold text-[#ffffff]">About Us</h2>
        </section>
        <section id="teams" className="h-screen scroll-mt-[210px] pt-4">
          <h2 className="text-3xl font-bold text-[#ffffff]">Teams</h2>
        </section>
        <section id="staff" className="h-screen scroll-mt-[210px] pt-4">
          <h2 className="text-3xl font-bold text-[#ffffff]">Staff/Officers</h2>
        </section>
        <section id="dungeon" className="h-screen scroll-mt-[210px] pt-4">
          <h2 className="text-3xl font-bold text-[#ffffff]">The Dungeon</h2>
        </section>
        <section id="contact" className="h-screen scroll-mt-[210px] pt-4">
          <h2 className="text-3xl font-bold text-[#ffffff]">Contact Info</h2>
        </section>
      </main>
    </div>
  );
}

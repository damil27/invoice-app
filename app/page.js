import { ContentSection } from "@/components/ContentSection";
import { Navbar } from "@/components/Navbar";
import ShowData from "@/components/ShowData";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen   flex items-start md:w-[60%] justify-center mx-auto    ">
      <div className=" md:mt-[4rem] flex flex-col justify-center items-center w-full relative">

      <ContentSection />
      </div>
      {/* <ThemeSwitcher /> */}

     
    </main>
  );
}

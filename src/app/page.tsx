import React from "react";
import Heading from "./_components/heading";
import AboutSection from "./_components/about";

export default function Home() {
  return (
    <main className="text-Neutrals/neutrals-12 bg-Neutrals/neutrals-1 dark:text-Neutrals/neutrals-1 dark:bg-Neutrals/neutrals-12 flex flex-col min-h-screen">
      <Heading />
      <AboutSection />
    </main>
  );
}

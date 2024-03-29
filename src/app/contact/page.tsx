import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-Neutrals/neutrals-12 bg-Neutrals/neutrals-1 dark:text-Neutrals/neutrals-1 dark:bg-Neutrals/neutrals-12 flex flex-col min-h-screen">
        <section id="hero">
            <div className="container mx-auto px-12 py-4">
                <div className="grid grid-cols-1 md:grid-cols-13">
                    <div className="col-span-7 place-self-center text-center md:text-left">
                        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold md:w-fit py-3 px-3 bg-gradient-to-l rounded-md text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 shadow-md">Contact Me!</h1>
                    </div>
                    <p className="text-Neutrals/neutrals-8 dark:text-Neutrals/neutrals-5 text-lg md:text-2xl mt-4 drop-shadow-md text-center">
                      You can currently contact me through my e-mail address and through signal messenger.
                    </p>
                </div>
                <hr className="mx-auto sm:my-5 w-8/12 md:w-full border-Neutrals/neutrals-7"/>
            </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 px-20 py-5 gap-5 items-center w-fit mx-auto">
              <Card className="bg-transparent border-0 max-w-sm content-center items-center">
                <Image
                  src="/signal.png"
                  width={400}
                  height={400}
                  alt="Social"
                  className="rounded-t-lg my-5 h-[200px] object-contain"
                />
                <CardContent className="mt-5">
                  <h2 className="text-2xl font-semibold line-clamp-2">Signal</h2>
                  <Button asChild className="w-full mt-7 font-semibold bg-gradient-to-l text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 hover:text-Neutrals/neutrals-3 transition hover:opacity-100 opacity-85 shadow-md">
                    <Link href={`https://signal.org/`}>@avitld.50</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-transparent border-0 max-w-sm content-center items-center">
                <Image
                  src="/email.png"
                  width={400}
                  height={400}
                  alt="Social"
                  className="rounded-t-lg my-5 h-[200px] object-contain"
                />
                <CardContent className="mt-5">
                  <h2 className="text-2xl font-semibold line-clamp-2">E-Mail</h2>
                  <Button asChild className="w-full mt-7 font-semibold bg-gradient-to-l text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 hover:text-Neutrals/neutrals-3 transition hover:opacity-100 opacity-85 shadow-md">
                    <Link href={`mailto:avitld@posteo.gr`}>avitld@posteo.gr</Link>
                  </Button>
                  <Button asChild className="w-full mt-2 font-semibold bg-gradient-to-l text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 hover:text-Neutrals/neutrals-3 transition hover:opacity-100 opacity-85 shadow-md">
                    <Link href={`#`}>PGP Key</Link>
                  </Button>
                </CardContent>
              </Card>
      </div>
    </main>
  );
}
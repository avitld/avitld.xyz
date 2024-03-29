"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-Neutrals/neutrals-5 dark:bg-Neutrals/neutrals-12 border-t-2 border-Neutrals/neutrals-6 dark:border-Neutrals/neutrals-8 shadow-md fixed bottom-0 left-0 right-0 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-md font-semibold z-50">
            <nav className="flex flex-wrap items-center w-fit align-middle content-center mx-auto space-x-8  md:space-x-4 p-3">
                <Link href={"https://youtube.com/@avitld"} target="_blank">
                    <Image src={"/youtube.png"} alt="YouTube" height={26} width={26} />
                </Link>
                <Link href={"https://twitter.com/anontld"} target="_blank">
                    <Image src={"/twitter.png"} alt="Twitter" height={26} width={26} />
                </Link>
                <Link href={"https://hostux.social/@avitld"} target="_blank">
                    <Image src={"/mastodon.png"} alt="Mastodon" height={26} width={26} />
                </Link>
                <Link href={"https://github.com/avitld"} target="_blank">
                    <Image src={"/github.png"} alt="GitHub" height={26} width={26} />
                </Link>
            </nav>
        </footer>
    );
  }
  
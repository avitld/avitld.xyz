"use client";

import Link from "next/link";

import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import Image from "next/image";

export default function Heading() {

    const [nameText, setNameText] = useState("Apollon, ");
    const initialText = "Apollon, ";
    const changeText = (text: string): void => {
        if (nameText === initialText) {
            setNameText(text);
        } else {
            setNameText(initialText);
        }
    };

    return (
        <section id="hero">
            <div className="container mx-auto px-12 py-4">
                <div className="grid grid-cols-1 md:grid-cols-13">
                    <div className="col-span-7 place-self-center text-center md:text-left">
                        <h1 onClick={() => changeText("Avitld, ")} className="text-3xl md:w-fit sm:w-full cursor-pointer md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-Tea-Green/tea-green-700 to-Phlox/phlox-300 drop-shadow-md">
                            {nameText}
                        </h1>
                        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold md:w-fit py-3 px-3 bg-gradient-to-l rounded-md text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 shadow-md">
                        <TypeAnimation
                            sequence={[
                                'Software Developer',
                                1500,
                                'Web Developer',
                                1500,
                                'System Administrator',
                                1500,
                                '*NIX Expert',
                                1500,
                                'Music Producer',
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{display: 'inline-block', transition: 'ease' }}
                            repeat={Infinity}
                        />
                        </h1>
                        <p className="text-Neutrals/neutrals-8 dark:text-Neutrals/neutrals-5 text-lg md:text-2xl mt-4 drop-shadow-md">
                            I am a 15 year-old Greek self-taught full-stack web developer
                            and software engineer. In addition, I deal with system administration (only on GNU/Linux)
                            and am deeply interested in the philosophy of free software.
                        </p>
                        <div>
                            <button className="mt-5 mb-5 md:text-xl md:mr-2 sm:mx-auto text-lg font-bold px-7 py-2 border-2 border-Wisteria/wisteria-500 rounded-full shadow-md transition hover:bg-Wisteria/wisteria-500 hover:text-white md:w-fit w-full">
                                <Link href={'#projects'} className="drop-shadow-md">
                                    Projects
                                </Link>
                            </button>
                            <button className="mb-4 my-0 md:text-xl md:ml-2 md:mr-2 sm:mx-auto text-lg font-bold px-7 py-2 border-2 border-Tea-Green/tea-green-700 rounded-full shadow-md transition hover:bg-Tea-Green/tea-green-700 hover:text-white md:w-fit w-full">
                                <Link href={'/contact'} className="drop-shadow-md">
                                    Contact
                                </Link>
                            </button>
                            <button className="mb-4 my-0 md:text-sm md:ml-2 sm:mx-auto text-md font-bold px-7 py-2 border-2 border-Phlox/phlox-300 rounded-full shadow-md transition hover:bg-Phlox/phlox-300 hover:text-white md:w-fit w-full">
                                <Link href={'/cv.pdf'} className="drop-shadow-md">
                                    View CV
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="mx-auto sm:my-5 w-8/12 md:w-full border-Neutrals/neutrals-7"/>
            </div>
        </section>
    );
  }
  
'use client';

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EyeIcon, CheckIcon } from '@heroicons/react/24/solid';

const AboutSection = () => {
  return (
    <section id='about'>
        <div className='text-Neutrals/neutrals-12 dark:text-white gap-8 items-center align-middle py-10 px-5 xl:gap-8 xl:py-16 xl:px-10 mx-auto text-center'>
            <div>
                <h2 className='text-4xl mb-3 mt-10 md:mt-0 font-bold bg-clip-text text-transparent bg-gradient-to-l from-Tea-Green/tea-green-700 to-Phlox/phlox-300 drop-shadow-md'>About me</h2>
                <p className='max-w-3xl text-xl text-left mx-auto'>
                  I am a 15 year-old student that is really interested in programming, with a focus on software engineering and full stack web development.
                  My hobbies include working with the *BSD and GNU/Linux operating systems, Music Production and System Administration.
                  <br/><br/>
                  Beyond programming, I have a strong commitment to internet privacy protection
                  and the free software philosophy. To me, these ideas are more than simply ideals; they are guiding principles that influence how I use technology and
                  direct my advocacy work.
                </p>
            </div>

        </div>
        <section id='projects'>
          <div className='mb-20'>
            <p className='text-4xl text-center mb-3 font-bold bg-clip-text w-fit mx-auto text-transparent bg-gradient-to-l from-Tea-Green/tea-green-700 to-Phlox/phlox-300 drop-shadow-md'>My Projects:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 px-20 gap-5 items-center w-fit mx-auto">
              
              <Card className="shadow-md dark:bg-Neutrals/neutrals-11 dark:border-Neutrals/neutrals-10 border-2 max-w-sm content-center items-center">
                <Image src={'/avitld.dev.png'} alt="This Website" width={300} height={300} className='m-5 rounded-xl mx-auto drop-shadow-md shadow-black  h-[200px] object-contain' />
                <CardContent>
                  <h3 className="text-lg font-semibold line-clamp-2">This Website</h3>
                  <p className="line-clamp-3 text-sm mt-2 text-Neutrals/neutrals-8">
                        This is my personal website, blog and portfolio. It is built using Sanity.io, NextJS, TailwindCSS and ShadcnUI.
                  </p>
                  <Button asChild className="w-full mt-7 font-semibold bg-gradient-to-l text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 hover:text-Neutrals/neutrals-3 transition hover:opacity-100 opacity-85 shadow-md">
                    <Link href={"#"}>
                      <EyeIcon className='h-5 w-5 mr-1'/>
                      You are already here
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="shadow-md dark:bg-Neutrals/neutrals-11 dark:border-Neutrals/neutrals-10 border-2 max-w-sm content-center items-center">
                <Image src={'/searchtld.png'} alt="SearchTLD" width={300} height={300} className='m-5 rounded-xl mx-auto h-[200px] object-contain' />
                <CardContent>
                  <h3 className="text-lg font-semibold line-clamp-2">SearchTLD <span className='text-sm font-bold text-Neutrals/neutrals-8'> ( Development Halted ) </span></h3>
                  <p className="line-clamp-3 text-sm mt-2 text-Neutrals/neutrals-8">
                        SearchTLD is a fast and powerful privacy-centric meta-search engine built with PHP and JS using no frameworks.
                  </p>
                  <Button asChild className="w-full mt-7 font-semibold bg-gradient-to-l text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 hover:text-Neutrals/neutrals-3 transition hover:opacity-100 opacity-85 shadow-md">
                    <Link target='_blank' href={"https://github.com/avitld/SearchTLD"}>
                      <EyeIcon className='h-5 w-5 mr-1'/>
                      View on GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="shadow-md dark:bg-Neutrals/neutrals-11 dark:border-Neutrals/neutrals-10 border-2 max-w-sm content-center items-center">
                <Image src={'/cover2.png'} alt="John Pork's Emporium" width={300} height={300} className='m-5 rounded-xl mx-auto h-[200px] object-contain' />
                <CardContent>
                  <h3 className="text-lg font-semibold line-clamp-2">John Pork's Emporium: Night Shift</h3>
                  <p className="line-clamp-3 text-sm mt-2 text-Neutrals/neutrals-8">
                      Jonas, a security guard newly hired at a computer shop in Athens, uncover a dangerous plot against him. Yes this game is ironic.
                  </p>
                  <Button asChild className="w-full mt-7 font-semibold bg-gradient-to-l text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 hover:text-Neutrals/neutrals-3 transition hover:opacity-100 opacity-85 shadow-md">
                    <Link target='_blank' href={"https://avitld.itch.io/john-porks-emporium-night-shift"}>
                      <EyeIcon className='h-5 w-5 mr-1'/>
                      View on Itch.io
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    </section>
  )
}

export default AboutSection
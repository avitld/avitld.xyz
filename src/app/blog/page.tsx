import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == "blog"] | order(_createdAt desc) {
    title,
      snippet,
      "currentSlug": slug.current,
      _updatedAt,
      titleImage,
  }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Blog() {

  const data: blogCard[] = await getData()

  return (
    <main className="text-Neutrals/neutrals-12 bg-Neutrals/neutrals-1 dark:text-Neutrals/neutrals-1 dark:bg-Neutrals/neutrals-12 flex flex-col min-h-screen">
        <section id="hero">
            <div className="container mx-auto px-12 py-4">
                <div className="grid grid-cols-1 md:grid-cols-13">
                    <div className="col-span-7 place-self-center text-center md:text-left">
                        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold md:w-fit py-3 px-3 bg-gradient-to-l rounded-md text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 shadow-md">Blog</h1>
                    </div>
                    <p className="text-Neutrals/neutrals-8 dark:text-Neutrals/neutrals-5 text-lg md:text-2xl mt-4 drop-shadow-md text-center">
                    Here you'll find occasional blog posts/articles, touching on various topics, mainly related to technology.
                    </p>
                </div>
                <hr className="mx-auto sm:my-5 w-8/12 md:w-full border-Neutrals/neutrals-7"/>
            </div>
        </section>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 px-20 gap-5 items-center w-fit mx-auto">
          {
            data.map((post, idx) => (
              <Card key={idx} className="shadow-md dark:bg-Neutrals/neutrals-11 dark:border-Neutrals/neutrals-10 border-2 max-w-sm content-center items-center">
                <Image
                  src={urlFor(post.titleImage).url()}
                  width={450}
                  height={450}
                  alt="BlogImage"
                  className="rounded-t-lg h-[200px] object-contain"
                />
                <CardContent className="mt-5">
                  <p className="text-sm text-Neutrals/neutrals-8">{post._updatedAt.split("T")[0]}</p>
                  <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
                  <p className="line-clamp-3 text-sm mt-2 text-Neutrals/neutrals-8">
                    {post.snippet}
                  </p>
                  <Button asChild className="w-full mt-7 font-semibold bg-gradient-to-l text-white from-Tea-Green/tea-green-700 to-Phlox/phlox-300 hover:text-Neutrals/neutrals-3 transition hover:opacity-100 opacity-85 shadow-md">
                    <Link href={`/blog/${post.currentSlug}`}>Read</Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          }
      </div>
    </main>
  );
}

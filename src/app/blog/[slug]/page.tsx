import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
      title,
        content,
        "currentSlug": slug.current,
        _updatedAt,
        titleImage,
    }[0]
    `;
  
    const data = await client.fetch(query);
  
    return data;
  }

export default async function Article({params}: {params: {slug: string}}) {
    const data: fullBlog = await getData(params.slug);

    return (
        <div className="max-w-screen-md p-6 md:p-0 mx-auto">
            <span className="text-center block text-base text-Neutrals/neutrals-7 mt-4">{data._updatedAt.split("T")[0]}</span>
            <h1 className="text-center block text-4xl mt-0 font-bold">{data.title}</h1>
            <Image
                src={urlFor(data.titleImage).url()}
                width={650}
                height={650}
                alt="Article"
                priority
                className="text-center mx-auto rounded-lg border-2 my-3 p-5 dark:border-Neutrals/neutrals-11"
            />
            <hr className="mx-auto sm:my-5 border-Neutrals/neutrals-7"/>
            <div className="mt-16 mb-20 prose prose-blue prose-a:no-underline prose-a:font-bold prose-lg prose-headings:my-5 prose-p:pl-2 dark:prose-invert">
                <PortableText value={data.content} />
            </div>
        </div>
    )
}
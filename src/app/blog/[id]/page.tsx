import fs from "fs";
import path from "path";

import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "remark-rehype";
import matter from "gray-matter";
import DateFormatter from "@/components/date";

export async function getPostDataBySlug(slug: string) {
  const location = path.join("posts", `${slug}.md`);
  const file = fs.readFileSync(location);

  const contentMatter = matter(file);
  const contentBody = (
    await remark()
      .use(rehypeAutolinkHeadings)
      .use(remarkGfm)
      .use(html)
      .process(contentMatter.content)
  ).toString();

  return {
    contentBody,
    ...contentMatter.data,
  };
}

function Jumbotron(props: {
  title: string;
  description: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}) {
  return (
    <div className="py-8">
      <div className="mb-4">
        <h1 className="text-6xl font-black text-slate-800 mb-2">
          {props.title}
        </h1>
        <div className="font-light text-slate-600">
          <DateFormatter
            className="italic"
            dateString={new Date(props.createdAt).toISOString()}
          />
          <span className="mx-2">—</span>
          <span className="font-bold">{props.author}</span>
        </div>
      </div>
      <p className="text-3xl text-slate-600">{props.description}</p>
      <div className="prose">
        <hr className="mt-8" />
      </div>
    </div>
  );
}

export default async function BlogPost() {
  const postData = await getPostDataBySlug("example");

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4">
        <Jumbotron
          title={postData.title}
          description={postData.description}
          author={postData.author}
          createdAt={postData.createdAt}
          updatedAt={postData.updatedAt}
        />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: postData.contentBody }}
        />
      </div>
      <div className="col-span-2">
        <span className="text-xl block underline">Categories</span>
        {postData.categories.map((category) => (
          <span className="block">{category}</span>
        ))}
      </div>
    </div>
  );
}

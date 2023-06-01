import path from "path";
import fs from "fs";

import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

import Date from "@/components/date";

export async function getPostData() {
  const fullPath = path.join("content/blog", `2023-06-01-example-post.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    frontMatter: matterResult.data,
    contentHtml,
  };
}

export default async function BlogPost() {
  const post = await getPostData();

  return (
    <div className="prose">
      <h1>{post.frontMatter.title}</h1>
      <Date dateString={post.frontMatter.createdAt.toISOString()} />
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}

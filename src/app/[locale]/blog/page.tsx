import { Metadata } from "next";
import Post from "@/components/blog/post-card";

export const metadata: Metadata = {
  title: "Mateus Soares | Blog",
  description:
    "A Blog that summarizes the lastest news in web development, focusing in javascript frameworks like NextJS, React, NestJS and others.",
};

async function fetchPosts(locale: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/posts?locale=${locale}`,
    {
      next: {
        revalidate: 0,
      },
    },
  );
  const data = response.json();
  return data;
}

export default async function BlogPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const data = (await fetchPosts(locale)) as PostResponse;
  const { docs } = data;

  return (
    <ul className="flex flex-col gap-10">
      {docs.map((doc) => {
        return (
          <li key={doc.id}>
            <Post
              id={doc.id}
              title={doc.title}
              description={doc.description}
              createdAt={doc.createdAt}
              tags={doc.tags}
              locale={locale}
            />
          </li>
        );
      })}
    </ul>
  );
}

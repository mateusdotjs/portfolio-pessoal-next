"use client";

import { useEffect, useState } from "react";
import PostCard from "./post-card";
import Loading from "./loading";
import Error from "./error";

export default function FetchPosts({ locale }: { locale: string }) {
  const [posts, setPosts] = useState<null | Posts>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/posts/?locale=${locale}`,
        );
        const data = (await response.json()) as Posts;
        setPosts(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [locale]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return (
    <ul className="flex flex-col gap-10">
      {posts &&
        posts.docs.map((post) => {
          return (
            <li key={post.id}>
              <PostCard
                id={post.id}
                title={post.title}
                description={post.description}
                createdAt={post.createdAt}
                tags={post.tags}
                locale={locale}
              />
            </li>
          );
        })}
    </ul>
  );
}

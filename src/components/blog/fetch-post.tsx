"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Error from "./error";
import { formatDate } from "@/helper/formatDate";
import { serialize } from "./serialize";

export default function FetchPost({ locale, id }: { locale: string, id: string }) {
    const [post, setPost] = useState<null | Post>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const t = useTranslations("Blog");
    
    useEffect(() => {
        async function fetchPost() {
          setIsLoading(true);
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/posts/${id}?locale=${locale}`,
            );
            const data = (await response.json()) as Post;
            setPost(data);
          } catch (error) {
            setError(true);
          } finally {
            setIsLoading(false);
          }
        }
    
        fetchPost();
      }, [id, locale]);
    
      if (isLoading) return <Loading />;
      if (error) return <Error />;
    
    return (
        <div className="flex-1 flex-col">
        {post && (
          <>
            <h1 className="mb-3 text-4xl font-semibold text-white">
              {post.title}
            </h1>
            <p className=" mb-3 text-neutral-300">{post.description}</p>
            <p className="mb-5 text-sm text-neutral-500">
              {t("updatedAt")} {formatDate(post.updatedAt, locale as string)}.
            </p>
            <div>{serialize(post.content)}</div>
          </>
        )}
      </div>
    )
}

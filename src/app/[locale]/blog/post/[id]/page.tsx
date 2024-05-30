import { formatDate } from "@/helper/formatDate";
import { serialize } from "@/components/blog/serialize";
import { getTranslations } from "next-intl/server";

async function fetchPost(locale: string, id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/posts/${id}?locale=${locale}`,
    {
      next: {
        revalidate: 0,
      },
    },
  );
  const data = response.json();
  return data;
}

export default async function PostPage({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const { locale, id } = params;
  const post = await fetchPost(locale, id);
  const updatedDate = formatDate(post.updatedAt, locale);
  const t = await getTranslations("Blog");

  return (
    <main className="mx-auto flex w-[700px] flex-1 flex-col pt-10">
      <h1 className="mb-3 text-4xl font-semibold text-white">{post.title}</h1>
      <p className=" mb-3 text-neutral-300">{post.description}</p>
      <p className="mb-5 text-sm text-neutral-500">
        {t("updatedAt")} {updatedDate}.
      </p>
      <div>{serialize(post.content)}</div>
    </main>
  );
}

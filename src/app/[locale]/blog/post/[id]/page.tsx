import FetchPost from "@/components/blog/fetch-post";

export default async function PostPage({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const { locale, id } = params;

  return <FetchPost locale={locale} id={id} />;
}

import FetchPosts from "@/components/blog/fetch-posts";

export default async function BlogPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return <FetchPosts locale={locale}/>;
}

import { formatDate } from "@/helper/formatDate";
import { Link } from "../navigation";

export default function PostCard({
  id,
  title,
  description,
  createdAt,
  tags,
  locale,
}: PostCardProps) {
  const createdDate = formatDate(createdAt, locale);

  return (
    <div className="relative">
      <div
        className="mb-3 w-auto max-w-[132px] rounded-2xl border-[1px] border-neutral-800 bg-gradient-to-br 
        from-neutral-800 to-neutral-950 px-5 py-1
       font-normal text-white lg:absolute lg:left-[-180px] lg:mb-0"
      >
        {createdDate}
      </div>
      <Link href={`blog/post/${id}`}>
        <p className="text-xl font-semibold text-white">{title}</p>
        <p className="mb-3 line-clamp-2 font-normal text-neutral-500">
          {description}
        </p>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <p
              key={tag.id}
              className="rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 px-3 py-[1px] text-white"
            >
              {tag.tag}
            </p>
          ))}
        </div>
      </Link>
    </div>
  );
}

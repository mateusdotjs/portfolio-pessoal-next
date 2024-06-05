type Posts = {
  docs: {
    id: string;
    title: string;
    content: any[];
    description: string;
    tags: {
      tag: string;
      id: string;
    }[];
    createdAt: string;
    updatedAt: string;
    published?: boolean;
  }[];
};

type Post = Posts["docs"][number];

type PostCardProps = Pick<
  Post,
  "id" | "title" | "description" | "createdAt" | "tags"
> & { locale: string };

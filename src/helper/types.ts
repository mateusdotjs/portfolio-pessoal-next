type PostResponse = {
  docs: {
    id: string;
    title: string;
    description: string;
    tags: {
      tag: string;
      id: string;
    }[];
    createdAt: string;
    updatedAt?: string;
    published?: boolean;
  }[];
};

type PostType = {
  id: string;
  title: string;
  description: string;
  tags: {
    tag: string;
    id: string;
  }[];
  createdAt: string;
  updatedAt?: string;
  published?: boolean;
  locale: string;
};

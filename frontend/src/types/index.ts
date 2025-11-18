export type Post = {
  id: number;
  author: {
    name: string;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
};
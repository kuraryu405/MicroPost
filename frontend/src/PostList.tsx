import axios from 'axios';
import { useEffect, useState } from 'react';

type Post = {
  id: number;
  author: {
    name: string;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
};



export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/post').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="w-2/3">
    <div className="bg-white border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4 text-black">
        Post List
      </h2>
      <div className="space-y-4 text-black">
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="my-6">
            <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96">
              <div className="p-4">
                <p className="mb-2 text-slate-800 text-xl font-semibold">
                  {post.author.name}
                </p>
                <p className="text-slate-600 leading-normal font-light whitespace-pre-wrap">
                  {post.content}
                </p>
              </div>
              <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
                <span className="text-sm text-slate-600 font-medium">
                  {post.createdAt}
                </span>
              </div>
            </div>
          </li>

        ))}
      </ul>
      </div>

      </div>
    </div>
  );
}
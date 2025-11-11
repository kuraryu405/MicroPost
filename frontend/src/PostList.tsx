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
          <li key={post.id}>
            <div>投稿者: {post.author.name}</div>
            <div>ツイート: {post.content}</div>
            <div>投稿日時: {post.createdAt}</div>
          </li>

        ))}
      </ul>
      </div>

      </div>
    </div>
  );
}
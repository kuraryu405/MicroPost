import { useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  author: {
    name: string;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
};

type PostProps = {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

export default function Post({ setPosts }: PostProps) {
  const [content, setContent] = useState('');

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userIdStr = localStorage.getItem('userId');
    const userId = Number(userIdStr);

    

    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:3000/post');
      setPosts(response.data);
    };

    if (!content.trim()) {
      alert('内容を入力してください');
      return;
    }

    try {
      await axios.post(
        'http://localhost:3000/post',
        { userId, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContent('');
      fetchPosts();
    } catch (error) {
      console.error(error);
      alert('投稿に失敗しました');
    }
  }

  return (
    <div className="w-1/3">
      <div className="bg-white border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4 text-black">{localStorage.getItem('name')} として投稿</h2>
        <form onSubmit={handlePost}>
          <textarea
            placeholder="content"
            className="textarea textarea-bordered w-full min-h-[150px] resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-accent bg-info w-full mt-2 z-10 hover:bg-accent/80 p-2"
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
}

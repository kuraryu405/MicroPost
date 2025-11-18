import Header from './Header';
import Post from './Post';
import PostList from './PostList';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/post').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <div className="bg-white min-h-screen w-screen">
        <Header />

        <div className="container mx-auto px-6 flex gap-6">
          <Post setPosts={setPosts}/>

          {/* 右側: 投稿一覧 */}
          <PostList posts={posts} />
        </div>
      </div>
      
    </>
  );
}

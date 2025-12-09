import Header from './Header';
import Post from './Post';
import PostList from './PostList';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from './hooks/usePosts';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);
  const { posts, fetchPosts } = usePosts();
  return (
    <>
      <div className="bg-white min-h-screen w-screen pt-28">
        <Header />

        <div className="container mx-auto px-6 flex gap-6">
          <Post fetchPosts={fetchPosts} />

          {/* 右側: 投稿一覧 */}
          <PostList posts={posts} fetchPosts={fetchPosts} />
        </div>
      </div>

    </>
  );
}

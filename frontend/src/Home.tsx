import Header from './Header';
// import Footer from './Footer';
import Post from './Post';
import PostList from './PostList';

export default function Home() {
  return (
    <>
      <div className="bg-white min-h-screen w-screen">
        <Header />

        <div className="container mx-auto px-6 flex gap-6">
          <Post />

          {/* 右側: 投稿一覧 */}
          <PostList />
        </div>
      </div>
    </>
  );
}

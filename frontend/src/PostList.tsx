import { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ja';
import type { Post } from './types';
import { API_URL } from './config/api';
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.locale('ja');

type PostListProps = {
  posts: Post[];
  fetchPosts: () => Promise<void>;
};

export default function PostList({ posts, fetchPosts }: PostListProps) {

  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [editingContent, setEditingContent] = useState('');

  const handleDeletePost = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/post/${id}`);
      await fetchPosts();
    } catch (error) {
      console.error(error);
      alert('投稿の削除に失敗しました');
    }
  };
  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setEditingContent(post.content);
  };
  const handleUpdatePost = async (id: number) => {
    try {
      await axios.put(`${API_URL}/post/${id}`, { content: editingContent });
      await fetchPosts();
      setEditingPost(null);
    } catch (error) {
      console.error(error);
      alert('投稿の更新に失敗しました');
    }
  };
  return (
    <div className="w-2/3">
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-black">Post List</h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="my-6 justify-center">
              <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                <div className="p-4">
                  <p className="mb-2 text-slate-800 text-xl font-semibold">
                    {post.author.name}
                  </p>

                  {editingPost?.id === post.id ? (
                    <div className="mb-2">
                      <textarea
                        className="textarea textarea-bordered w-full h-24 mb-2 text-black bg-white"
                        value={editingContent}
                        onChange={(e) => setEditingContent(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <button onClick={() => handleUpdatePost(post.id)} className="btn btn-sm btn-primary text-black">
                          保存
                        </button>
                        <button onClick={() => setEditingPost(null)} className="btn btn-sm btn-ghost text-black">
                          キャンセル
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-600 leading-normal font-light whitespace-pre-wrap">
                      {post.content}
                    </p>
                  )}
                </div>
                <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1 flex justify-between items-center">
                  <span className="text-sm text-slate-600 font-medium">
                    {dayjs(post.createdAt)
                      .tz('Asia/Tokyo')
                      .format('YYYY/MM/DD HH:mm:ss')}
                  </span>
                  {editingPost?.id !== post.id && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditPost(post)}
                        className="btn btn-primary btn-xs text-black"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="btn btn-error btn-xs text-black"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default function PostList() {
  return (
    <div className="w-2/3">
    <div className="bg-white border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4 text-black">
        Post List
      </h2>
      <div className="space-y-4">
        {/* サンプル投稿 */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-600">user 1</span>
          </div>
          <p className="text-gray-800">サンプル投稿の内容です</p>
          <span className="text-gray-400 text-xs">
            2024/1/1 12:00:00
          </span>
        </div>
        <div className="border-b pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-600">user 2</span>
          </div>
          <p className="text-gray-800">別のユーザーの投稿です</p>
          <span className="text-gray-400 text-xs">
            2024/1/1 11:00:00
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}
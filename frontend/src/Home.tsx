export default function Home() {
    return (
        <>
            <div className="bg-white min-h-screen w-screen">
                <header className="py-4 mb-6 border-b">
                    <div className="container mx-auto flex items-center justify-center px-6">
                        <h1 className="text-3xl font-bold text-blue-700 text-center">
                            Micro Post
                        </h1>
                    </div>
                </header>

                <div className="container mx-auto px-6 flex gap-6">
                    {/* 左側: 投稿作成フォーム */}
                    <div className="w-1/3">
                        <div className="bg-white border rounded-lg p-4">
                            <h2 className="text-lg font-semibold mb-4">投稿を作成</h2>
                            <form>
                                <textarea
                                    placeholder="content"
                                    className="textarea textarea-bordered w-full min-h-[150px] resize-none"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full mt-4"
                                >
                                    POST
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* 右側: 投稿一覧 */}
                    <div className="w-2/3">
                        <div className="bg-white border rounded-lg p-6">
                            <h2 className="text-lg font-semibold mb-4">Post List</h2>
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
                </div>
            </div>
        </>
    );
}

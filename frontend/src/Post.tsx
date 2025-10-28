export default function Post() {
  return (
    <div className="w-1/3">
      <div className="bg-white border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4 text-black">投稿を作成</h2>
        <form>
          <textarea
            placeholder="content"
            className="textarea textarea-bordered w-full min-h-[150px] resize-none"
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

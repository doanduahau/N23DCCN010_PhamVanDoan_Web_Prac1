import Badge from "./Badge";

export default function BlogCard({ post }) {
  return (
    <div className="border p-5 rounded-xl shadow-sm hover:shadow-lg transition bg-white">
      <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wide">
        {post.category}
      </span>
      <Badge label={post.title} />
      <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.body}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-sm text-gray-400">User #{post.userId}</span>
        <a 
          href={`/blog/${post.id}`}
          className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
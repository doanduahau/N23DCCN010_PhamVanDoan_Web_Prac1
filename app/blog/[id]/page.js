import Link from 'next/link';
import Header from '@/components/Header';

async function getPostDetail(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetail({ params }) {
  // Lấy id từ URL
  const { id } = await params;
  const post = await getPostDetail(id);

  if (!post) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold">Bài viết không tồn tại</h1>
        <Link href="/" className="text-indigo-600 hover:underline mt-4 block">Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        {/* Nút Back */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          ← Back to Blog
        </Link>

        {/* Nội dung bài viết */}
        <article className="bg-white border rounded-2xl p-8 shadow-sm">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            Post ID: {post.id}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="prose prose-indigo max-w-none">
            <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              {post.body}
            </p>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center">
            <p className="text-sm text-gray-500">Người đăng: User số {post.userId}</p>
          </div>
        </article>
      </main>
    </>
  );
}
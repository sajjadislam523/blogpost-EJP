import Link from "next/link.js";

export default async function Home() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    // console.log(data);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
                📝 Explore Our Latest Blog Posts
            </h1>
            <p className="text-center text-lg text-gray-600 mb-8">
                Stay informed, inspired, and up-to-date with our curated
                content.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((post) => (
                    <li key={post.id} className="group">
                        <Link
                            className="block p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-blue-500"
                            href={`/blog/${post.id}`}
                        >
                            <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 line-clamp-2">
                                {post.body}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

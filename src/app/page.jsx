import Link from "next/link.js";

export default async function Home() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    // console.log(data);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <Link
                            className="text-lg font-medium"
                            href={`/blog/${post.id}`}
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

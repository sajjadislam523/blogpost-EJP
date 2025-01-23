import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link.js";

export default async function PostDetail({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return (
        <div className="p-8 flex flex-col items-center justify-center bg-gray-50 min-h-screen">
            <div className="text-3xl font-extrabold mb-6 text-gray-800">
                📖 Description of Post {id}
            </div>
            <Card className="w-full max-w-3xl border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400 text-white p-6">
                    <CardTitle className="text-3xl font-bold">
                        {post.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-white">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {post.body}
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-6 bg-gray-100 border-t border-gray-200">
                    <Button
                        asChild
                        variant="outline"
                        className="text-blue-500 hover:bg-blue-50"
                    >
                        <Link href="/">← Back</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

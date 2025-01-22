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
        <div className="p-8 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold mb-4">
                Description of post {id}
            </div>
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        {post.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700">{post.body}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button asChild variant="link">
                        <Link href="/"> ← Back</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

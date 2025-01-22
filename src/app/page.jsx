import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
export default async function Home() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    // console.log(data);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-lg my-4 md:text-2xl lg:text-4xl font-semibold">
                Welcome to My Blog Website!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((post) => (
                    <Card key={post.id}>
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{post.body}</p>
                        </CardContent>
                        <CardFooter>
                            <Button>Read More</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

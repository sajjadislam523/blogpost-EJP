import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useRouter } from "next/router.js";

export default async function ProfilePage() {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();
    const router = useRouter();

    // useEffect(() => {
    //     if (!isLoading && !isAuthenticated) {
    //         router.push("/login");
    //     }
    // }, [isAuthenticated, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="p-8 rounded-lg shadow-lg bg-white">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome to Your Profile!
                </h1>
                <p className="text-gray-600">
                    Hello, {user?.given_name || "User"} 👋
                </p>
            </div>
        </div>
    );
}

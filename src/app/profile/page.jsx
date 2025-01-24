import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const { user, isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }

    return (
        <div className="min-h-screen container mx-auto flex items-center justify-center bg-gray-50">
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

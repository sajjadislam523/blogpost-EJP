"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const { getUser } = useKindeAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const fetchedUser = await getUser();
            setUser(fetchedUser);
        }
        fetchUser();
    }, [getUser]);

    if (!user) {
        return <div>Loading...</div>;
    }

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

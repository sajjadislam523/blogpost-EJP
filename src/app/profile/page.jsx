"use client";

import { LoginLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading.jsx";
import { Button } from "../../components/ui/button.jsx";

export default function ProfilePage() {
    const { getUser } = useKindeAuth();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                const fetchedUser = await getUser();
                setUser(fetchedUser);
            } catch (err) {
                console.error("Error fetching user:", err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [getUser]);

    if (loading) {
        return <Loading />;
    }

    if (!loading && !user) {
        return (
            <div className="min-h-screen container mx-auto flex items-center justify-center px-2">
                <div className="p-8 rounded-lg shadow-lg bg-white">
                    <h1 className="text-xl md:text-2xl font-bold mb-4">
                        You are not logged in!
                    </h1>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                        Please log in to access your profile.
                    </p>
                    <LoginLink>
                        <Button className="rounded-full">Login</Button>
                    </LoginLink>
                </div>
            </div>
        );
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

"use client";
import {
    LoginLink,
    LogoutLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link.js";

function Navbar() {
    const { getUser, isAuthenticated } = useKindeAuth();
    return (
        <nav className="bg-gray-100 text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/">Blog Post</Link>
                </div>

                <ul className="flex items-center space-x-4">
                    <li>
                        <Button className="rounded-full">
                            <Link href="/" className="hover:text-gray-300">
                                Home
                            </Link>
                        </Button>
                    </li>
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link href="/profile">
                                    {getUser()?.given_name || "User"}
                                </Link>
                            </li>
                            <li>
                                <Button className="rounded-full">
                                    <LogoutLink>Logout</LogoutLink>
                                </Button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Button className="rounded-full">
                                    <LoginLink>Login</LoginLink>
                                </Button>
                            </li>
                            <li>
                                <Button className="rounded-full">
                                    <RegisterLink>Signup</RegisterLink>
                                </Button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

"use client";

import Link from "next/link.js";

const DropdownMenu = ({ user }) => {
    return (
        <ul className="absolute top-16 left-0 w-full bg-gray-100 shadow-md ">
            <li className="border-b border-gray-300">
                <Link href="/" className="block py-2 px-4">
                    Home
                </Link>
            </li>
            {user ? (
                <>
                    <li className="border-b border-gray-300">
                        <Link href="/profile" className="block py-2 px-4">
                            {user?.given_name || "User"}
                        </Link>
                    </li>
                    <li className="border-b border-gray-300">
                        <Link
                            href="/api/auth/logout"
                            className="block py-2 px-4"
                        >
                            Logout
                        </Link>
                    </li>
                </>
            ) : (
                <>
                    <li className="border-b border-gray-300">
                        <Link
                            href="/api/auth/login"
                            className="block py-2 px-4"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/api/auth/register"
                            className="block py-2 px-4"
                        >
                            Register
                        </Link>
                    </li>
                </>
            )}
        </ul>
    );
};

export default DropdownMenu;

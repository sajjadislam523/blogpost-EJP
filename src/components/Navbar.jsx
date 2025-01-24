"use client";

import DropdownMenu from "@/components/DropdownMenu";
import { Button } from "@/components/ui/button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link.js";
import { useEffect, useState } from "react";

function Navbar() {
    const { getUser } = useKindeAuth();
    const user = getUser();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <nav className="bg-gray-100 text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/">Blog Post</Link>
                </div>

                {/* Desktop Menu */}
                <ul className="lg:flex items-center space-x-4 hidden">
                    <li>
                        <Button className="rounded-full">
                            <Link href="/" className="hover:text-gray-300">
                                Home
                            </Link>
                        </Button>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <Link href="/profile">
                                    {user?.given_name || "User"}
                                </Link>
                            </li>
                            <li>
                                <Button className="rounded-full">
                                    <Link href="/api/auth/logout">Logout</Link>
                                </Button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Button className="rounded-full">
                                    <Link href="/api/auth/login">Login</Link>
                                </Button>
                            </li>
                            <li>
                                <Button className="rounded-full">
                                    <Link href="/api/auth/register">
                                        Register
                                    </Link>
                                </Button>
                            </li>
                        </>
                    )}
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden relative">
                    <button
                        onClick={toggleMenu}
                        className="text-black focus:outline-none"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>

                    {/* Mobile Dropdown Menu */}
                    {isClient && (
                        <div
                            className={`absolute top-0 right-0 w-48 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out transform ${
                                isOpen
                                    ? "-translate-y-0 opacity-100"
                                    : "-translate-y-4 opacity-0"
                            }`}
                        >
                            <DropdownMenu user={user} />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

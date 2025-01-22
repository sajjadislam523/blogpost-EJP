import Link from "next/link.js";

function Navbar() {
    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/">Blog Post</Link>
                </div>

                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

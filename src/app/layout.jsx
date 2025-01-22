import Navbar from "@/components/Navbar";
import { AuthProvider } from "./AuthProvider.jsx";
import "./globals.css";

export const metadata = {
    title: "Blog Post",
    description: "Full of interesting blog posts!",
};

export default function RootLayout({ children }) {
    return (
        <AuthProvider>
            <html lang="en">
                <body>
                    <Navbar />
                    <main>{children}</main>
                </body>
            </html>
        </AuthProvider>
    );
}

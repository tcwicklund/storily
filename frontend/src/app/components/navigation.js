"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <img src="/globe.svg" alt="Logo" className="h-8 mr-2" />
          <Link className="text-xl font-bold" href="/">Storily</Link>
        </div>
        <nav className="space-x-4">
          <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "text-gray-300 hover:text-white"}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "text-gray-300 hover:text-white"}>About</Link>
          <Link href="/counter" className={pathname === "/counter" ? "font-bold mr-4" : "text-gray-300 hover:text-white"}>Counter</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className={pathname === "/login" ? "font-bold mr-4" : "text-gray-300 hover:text-white"}>Login</Link>
          <Link href="/register" className={pathname === "/register" ? "font-bold mr-4" : "text-gray-300 hover:text-white"}>Register</Link>
        </div>
        </nav>
    );
    }
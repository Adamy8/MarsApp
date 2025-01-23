"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
            <div className="flex text-xl font-bold text-gray-800">
                Mars Visit Application Form
            </div>
            <div className="flex-shrink-0">
                <Button className="text-white bg-gray-100 hover:bg-gray-300">
                <Link href="/" className="text-xl text-gray-800 hover:text-gray-600">
                    Home
                </Link>
                </Button>
            </div>
            </div>
        </div>
        </nav>
    );
}
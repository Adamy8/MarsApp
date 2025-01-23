import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Button className="navbar-brand" >
                <Link href="/">Home</Link>
            </Button>
        </nav>
    );
}
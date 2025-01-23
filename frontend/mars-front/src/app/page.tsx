import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-center container mx-auto px-4">
      <h1 className="text-4xl font-bold mt-8">Welcome to Mars</h1>
      <p className="mt-4">The best place for software engineers</p>
      <p className="mt-4">Join us now!</p>
      <Button className="mt-4">
        <Link href="/apply"> Apply </Link>
      </Button>
    </div>
  );
}

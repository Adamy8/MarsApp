import Link from "next/link";
import { Button } from "@/components/ui/button";
import { url } from "inspector";

export default function Home() {
  return (
    <div className="text-center container p-0 m-0 mx-auto items-center justify-center h-screen bg-[url('../mars.jpg')] bg-cover bg-center ">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mt-8">Welcome to Mars</h1>
        <p className="mt-4">The best place for software engineers</p>
        <p className="mt-4">Apply now!</p>
        <Link href="/apply">
            <Button className="mt-4">Apply</Button>
        </Link>
      </div>
    </div>
  );
}

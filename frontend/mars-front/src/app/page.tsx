import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/ParticleBackground"
import { Rocket, Satellite, Star, PlaneTakeoff, Earth } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[url('../mars.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-gray-900/70"></div>
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down">Welcome to Mars</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up">
          Have you ever dreamed of traveling to Mars?
        </p>
        <div className="flex items-center justify-center space-x-4 mb-12 text-yellow-600">
          <PlaneTakeoff className=" w-8 h-8 animate-bounce [animation-delay:0s]" />
          <Earth className="w-8 h-8 animate-bounce [animation-delay:0.1s]" />
          <Satellite className="w-8 h-8 animate-bounce [animation-delay:0.2s]" />
          <Star className="w-8 h-8 animate-bounce [animation-delay:0.3s]" />
          <Rocket className="w-8 h-8 animate-bounce [animation-delay:0.4s]" />
        </div>
        <Link href="/apply">
          <Button className="text-lg px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
            Apply Now!
          </Button>
        </Link>

        <div className="absolute top-0 right-0 p-4">
          <Link href="/board">     {/* develop later!! */}
            <Button className="text-white bg-gray-900 bg-opacity-50 px-4 py-2 rounded-lg hover:bg-opacity-70 transition-all duration-300">
              All Applications
            </Button>
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full text-center text-white p-4 text-sm bg-gray-900 bg-opacity-20 text-gray-500">
        <p className="text-sm">
          This is a fictional website for educational purposes only. No actual trips to Mars are available.
        </p>
        <p>&copy; copyright Adam Ye</p>
      </footer>
    </div>
  )
}
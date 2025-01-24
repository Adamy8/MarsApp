"use client";

import Navbar from '../_components/navbar';
import ParticleBackground from "@/components/ParticleBackground"
import { useApplicationStore } from '../_store/application';
import { useEffect } from 'react';
import AppCard from '../_components/AppCard';

export default function ApplyPage() {
    const { fetchApplications, apps } = useApplicationStore();

    useEffect(() => {
        fetchApplications();
    }, [apps]); // fetch when apps change


    return (
        <div className="relative min-h-screen bg-[url('../mars.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-gray-900/60"></div>
            <ParticleBackground />
            <Navbar />
            
            <div className="w-full h-full p-4 pt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {apps.map((app: any) => (
                    <AppCard key={app._id} app={app} />
                ))}
            </div>
            </div>

            {apps.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
                    <p className='bg-red-500 p-3 rounded-lg '>No applications found :(</p>
                </div>
            )}

        </div>
    );
}
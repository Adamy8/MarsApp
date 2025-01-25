import MultiStageForm from '../_components/multi-stage-form';
import Navbar from '../_components/navbar';
import ParticleBackground from '@/components/ParticleBackground';

export default function ApplyPage() {
    return (
        <div>
        <div className="min-h-screen bg-[url('../mars.jpg')] bg-cover bg-center">
        <ParticleBackground />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar />
            <MultiStageForm />
        </div>
        </div>
        </div>
    );
}
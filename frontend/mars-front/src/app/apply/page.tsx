import MultiStageForm from '../_components/multi-stage-form';
import Navbar from '../_components/navbar';

export default function ApplyPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar />
            <MultiStageForm />
        </div>
    );
}
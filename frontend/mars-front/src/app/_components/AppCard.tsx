import React from 'react';
import { useApplicationStore } from '../_store/application';
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

const AppCard: React.FC<{ app: any }> = ({ app }) => {

    const { toast } = useToast();
    const {deleteApp} = useApplicationStore();
    const handleDeleteApp = async (id: any) => {
        const {success, message} = await deleteApp(id);
        if (success) {
            toast({
                variant: "successB",  // personalized in toast.tsx
                title: message + "!",
            })
        } else {
            toast({
                variant: "destructive",
                title: message + "!",
            })
        }
    };

    return (
        <div className='bg-gray-900 bg-opacity-90 p-4 rounded-lg shadow-lg'>
            <Toaster />
            <div>   {/* app info */}
                <div className="text-white">   {/* personalInfo */}
                    <p>Name: {app.personalInfo.fullName}</p>
                    <p>Email: {app.personalInfo.email}</p>
                    <p>Phone: {app.personalInfo.phone}</p>
                    <p>Nationality: {app.personalInfo.nationality}</p>
                    <p>DateOfBirth: {app.personalInfo.birth}</p>
                </div>
                <div className="text-white">   {/* travelPreferences */}
                    <p>Departure: {app.travelPreferences.departureDate}</p>
                    <p>Return: {app.travelPreferences.returnDate}</p>
                    <p>Accomodation: {app.travelPreferences.accommodation}</p>
                    {app.travelPreferences.specialRequests && 
                        <p>SpecialRequest: {app.travelPreferences.specialRequests}</p>}
                </div>
                <div className="text-white">   {/* healthAndSafety */}
                    {!app.healthAndSafety.healthDeclaration && <p className='text-red-600'>NO HELATH DECLARATION</p>}
                    <p>Emergency Contact:</p>
                    <p>- name: {app.healthAndSafety.emergencyContact.name}</p>
                    <p>- phone: {app.healthAndSafety.emergencyContact.phone}</p>
                    <p>- relation: {app.healthAndSafety.emergencyContact.relation}</p>
                    {app.healthAndSafety.medicalConditions &&
                        <p>medicalConditions: {app.healthAndSafety.medicalConditions}</p>}
                </div>
            </div>

        </div>
    );

};

export default AppCard;

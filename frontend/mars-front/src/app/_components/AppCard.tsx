import React from 'react';
import { useState } from 'react';
import { useApplicationStore } from '../_store/application';
import { useToast } from "@/hooks/use-toast"
import { Button } from '@/components/ui/button';

// interface App {
//     personalInfo: {
//         fullName: string;
//         email: string;
//         phone?: string;
//         nationality?: string;
//         birth?: string;
//     };
//     travelPreferences: {
//         departureDate: string;
//         returnDate: string;
//         accommodation?: string;
//         specialRequests?: string;
//     };
//     healthAndSafety: {
//         healthDeclaration: boolean;
//         emergencyContact: {
//             name: string;
//             phone?: string;
//             relation?: string;
//         };
//         medicalConditions?: string;
//     };
// }

const AppCard = ({ app }: { app: any }) => {

    const { toast } = useToast();
    const {deleteApplication} = useApplicationStore();
    const handleDeleteApp = async (id: any) => {
        const {success, message} = await deleteApplication(id);
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
    const [showMore, setShowMore] = useState(false);

    const handleClick = async () => {
        setShowMore(!showMore)
    };


    return (
        <div className='bg-gray-900 bg-opacity-85 p-4 rounded-lg'>
            
            <div className="text-white">
                <div className="mb-4">
                    <p>Name: {app.personalInfo.fullName}</p>
                    <p>Email: {app.personalInfo.email}</p>
                    {showMore && (
                        <>
                            <p>Phone: {app.personalInfo.phone}</p>
                            <p>Nationality: {app.personalInfo.nationality}</p>
                            <p>DateOfBirth: {app.personalInfo.birth}</p>
                        </>
                    )}
                </div>
                <div className="mb-4">
                    <p>Departure: {app.travelPreferences.departureDate}</p>
                    <p>Return: {app.travelPreferences.returnDate}</p>
                    {showMore && (
                        <>
                            <p>Accomodation: {app.travelPreferences.accommodation}</p>
                            {app.travelPreferences.specialRequests && 
                                <p>SpecialRequest: {app.travelPreferences.specialRequests}</p>}
                        </>
                    )}
                </div>
                <div className="mb-4">
                    {!app.healthAndSafety.healthDeclaration && 
                        <p className='text-red-600'>NO HEALTH DECLARATION</p>}
                    <p>Emergency Contact:</p>
                    <p>- name: {app.healthAndSafety.emergencyContact.name}</p>
                    {showMore && (
                        <>
                            <p>- phone: {app.healthAndSafety.emergencyContact.phone}</p>
                            <p>- relation: {app.healthAndSafety.emergencyContact.relation}</p>
                            {app.healthAndSafety.medicalConditions &&
                                <p>medicalConditions: {app.healthAndSafety.medicalConditions}</p>}
                        </>
                    )}
                </div>

                <Button className="bold bg-white text-blue-500" onClick={handleClick}>
                    {showMore ? 'Show Less' : 'Show More'}
                </Button>
                <Button className="bold bg-white text-red-500" onClick={() => handleDeleteApp(app._id)}>
                    Delete
                </Button>

            </div>


        </div>
    );

};

export default AppCard;

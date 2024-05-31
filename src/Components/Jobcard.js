import React, { useState } from 'react';
import ViewUpdateJobModal from './ViewUpdateJobModal';

const Jobcard = ({ title, location, salary, jobId }) => {
    const [jobDetails, setJobDetails] = useState(null);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetailClick = async () => {
        try {
            const response = await fetch(`https://api-jobs.thinkscoopinc.com/job/${jobId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch job details');
            }

            const responseData = await response.json();
            
            const jobData = responseData.data
            console.log(jobData);
            console.log(jobData._id)
            setJobDetails(jobData);
            setIsModalOpen(true);
            setError(null);
        } catch (error) {
            setError(error.message);
            setJobDetails(null);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <main className="mx-4 mt-12 flex justify-center">
                <div className="shadow max-w-md bg-white border border-gray-300 rounded-md">
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="rounded-full bg-green-200 px-4 py-1 text-xs font-medium text-gray-900">{location}</span>
                            <span className="rounded-full bg-yellow-200 px-4 py-1 text-xs font-medium text-gray-900">INR:- {salary}</span>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button onClick={handleViewDetailClick} className="inline-block cursor-pointer rounded-lg border-2 border-gray-800 px-6 py-1 text-lg font-medium hover:bg-gray-800 hover:text-white">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            {error && <p>Error: {error}</p>}
            <ViewUpdateJobModal isOpen={isModalOpen} onClose={handleCloseModal} jobDetails={jobDetails} isViewOnly={true} />
        </div>
    );
};

export default Jobcard;

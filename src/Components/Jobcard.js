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
            console.log(responseData.data);  // Make sure responseData has the data you expect

            setJobDetails(responseData);  // Set jobDetails state with the response data
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
                <div className="shadow max-w-md bg-gray-50">
                    <div className="rounded-lg border-2 border-gray-900">
                        <div className="flex flex-col gap-x-4 p-4 sm:flex-row sm:items-center">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Thinkscoop Technologies</h4>
                                <div className="text-xs font-medium text-gray-900">{location}</div>
                            </div>
                        </div>
                        <div className="relative border-t-2 border-gray-800 p-4">
                            <div className="mr-16">
                                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                                <div className="mt-2">
                                    <span className="rounded-full bg-green-200 px-4 py-1 text-xs font-medium text-gray-900">FULL TIME</span>
                                    <span className="rounded-full bg-yellow-200 ml-2 px-4 py-1 text-xs font-medium text-gray-900">{salary}</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button onClick={handleViewDetailClick} className="ml-2">
                                    <a className="inline-block cursor-pointer rounded-lg border-2 border-gray-800 px-6 py-1 text-lg font-medium hover:bg-gray-800 hover:text-gray-50">View Details</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {error && <p>Error: {error}</p>}
            <ViewUpdateJobModal isOpen={isModalOpen} onClose={handleCloseModal} jobDetails={jobDetails} />
        </div>
    );
};

export default Jobcard;

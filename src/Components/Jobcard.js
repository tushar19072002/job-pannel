import React, { useState } from 'react';
import ViewUpdateJobModal from './ViewUpdateJobModal';

const Jobcard = ({ title, location, salary, jobId, status }) => {
    const [jobDetails, setJobDetails] = useState(null);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleViewDetailClick = async () => {
        setLoading(true);
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
            setJobDetails(responseData.data);
            setIsModalOpen(true);
            setError(null);
        } catch (error) {
            setError(error.message);
            setJobDetails(null);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const statusText = status === 'ACTIVE' ? 'Activated' : 'Deactivated';
    const statusColor = status === 'ACTIVE' ? 'bg-green-400' : 'bg-red-400';

    return (
        <div className="job-card shadow bg-white border border-gray-300 rounded-md relative">
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <span className={`rounded-full px-4 py-1 text-md font-medium text-gray-900 ${statusColor}`}>{statusText}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                <span className="rounded-full bg-green-200 px-4 py-1 text-md font-medium text-gray-900">{location}</span>

                    <span className="rounded-full bg-yellow-200 px-4 py-1 text-md font-medium text-gray-900">INR {salary.toLocaleString('en-IN')}</span>
                </div>
                <div className="mt-6 flex justify-center">
                    <button onClick={handleViewDetailClick} className="inline-block cursor-pointer rounded-lg border-2 border-gray-800 px-6 py-1 text-lg font-medium hover:bg-gray-800 hover:text-white">
                        View
                    </button>
                </div>
            </div>
            {error && <p>Error: {error}</p>}
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
            )}
            <ViewUpdateJobModal isOpen={isModalOpen} onClose={handleCloseModal} jobDetails={jobDetails} isViewOnly={true} />
        </div>
    );
};

export default Jobcard;

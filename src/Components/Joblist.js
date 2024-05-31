import React, { useEffect, useState } from 'react';
import Jobcard from './Jobcard';
import { useSelector } from 'react-redux';

const Joblist = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const isLoggedIn = useSelector((state) =>state.isLoggedIn);

  useEffect(() => {
    const fetchJobs = async (page) => {
      setLoading(true);
      try {
        const response = await fetch(`https://api-jobs.thinkscoopinc.com/job?page=${page}&limit=10&status=ACTIVE&sortBy=title&sortOrder=asc`);
        const data = await response.json();
        if (data.statusCode === 200) {
          setJobs(data.data);
          setTotalPages(data.totalPages);
        } else {
          console.error('Failed to fetch jobs:', data.message);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="job-list grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map(job => (
                  <Jobcard 
                    key={job._id} /* Add a key prop */
                    jobId={job._id}
                    title={job.title}
                    location={job.location}
                    salary={job.salaryBudget}
                    status={job.status}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`mx-2 px-4 py-2 border rounded ${currentPage === 1 ? 'cursor-not-allowed text-gray-500' : 'hover:bg-gray-200'}`}
                >
                  Previous
                </button>
                <span className="mx-2 px-4 py-2 border rounded">{currentPage}</span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`mx-2 px-4 py-2 border rounded ${currentPage === totalPages ? 'cursor-not-allowed text-gray-500' : 'hover:bg-gray-200'}`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl">Please log in to view job listings.</p>
        </div>
      )}
    </div>
  );
};

export default Joblist;

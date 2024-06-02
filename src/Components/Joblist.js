import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Jobcard from './Jobcard';
import { useSelector } from 'react-redux';

const Joblist = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const fetchJobs = async (page) => {
      setLoading(true);
      try {
        let url = `https://api-jobs.thinkscoopinc.com/job?page=${page}&limit=10&sortBy=title&sortOrder=asc`;
        
        // Modify the URL based on the filter selected
        if (filter !== 'ALL') {
          url += `&status=${filter}`;
        }
        
        const response = await fetch(url);
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
  }, [currentPage, filter, isLoggedIn]);
  

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

  const handleJobDeactivation = (jobId) => {
    setJobs(jobs.map(job => {
      if (job._id === jobId) {
        return { ...job, status: "INACTIVE" };
      }
      return job;
    }));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredJobs = jobs.filter(job => {
    if (filter === 'ACTIVE' && job.status !== 'ACTIVE') return false;
    if (filter === 'INACTIVE' && job.status !== 'INACTIVE') return false;
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center p-4 bg-teal-600 space-x-4">
            <div className="flex items-center space-x-2 ">
              <label htmlFor="filter" className="text-black font-semibold">Filter: </label>
              <select id="filter" value={filter} onChange={handleFilterChange} className="border rounded px-2 py-1">
                <option value="ALL">All</option>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 pl-8">
              <label htmlFor="search" className="text-black font-semibold">Search: </label>
              <input 
                id="search" 
                type="text" 
                value={searchQuery} 
                onChange={handleSearchChange} 
                placeholder="Search by title"
                className="border rounded px-2 py-1"
              />
            </div>
          </div>
          <div className="job-list grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map(job => (
              <Jobcard 
                key={job._id}
                jobId={job._id}
                title={job.title}
                location={job.location}
                salary={job.salaryBudget}
                status={job.status}
                onJobDeactivation={handleJobDeactivation}
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
            <span className="mx-2 px-4 py-2 border rounded">{currentPage} / {totalPages}</span>
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
    </div>
  );
};

export default Joblist;

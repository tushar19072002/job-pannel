import React, { useState, useEffect } from "react";

const ViewUpdateJobModal = ({ isOpen, onClose, jobDetails }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isRemoteAllowed, setIsRemoteAllowed] = useState(false);
  const [perks, setPerks] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [minimumExperience, setMinimumExperience] = useState(0);
  const [jobType, setJobType] = useState("");
  const [salaryBudget, setSalaryBudget] = useState(0);
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (jobDetails) {
      setTitle(jobDetails.title || "");
      setLocation(jobDetails.location || "");
      setIsRemoteAllowed(jobDetails.isRemoteAllowed || false);
      setPerks(jobDetails.perks || "");
      setTimeZone(jobDetails.timeZone || "");
      setMinimumExperience(jobDetails.minimumExperience || 0);
      setJobType(jobDetails.jobType || "");
      setSalaryBudget(jobDetails.salaryBudget || 0);
      setDescription(jobDetails.description || "");
      setResponsibilities(jobDetails.responsibilities || "");
      setQualifications(jobDetails.qualifications || "");
      setStatus(jobDetails.status || "");
    }
  }, [jobDetails]);

  const handleUpdateJobClick = async (e) => {
    e.preventDefault();
    try {
      // Your fetch logic goes here for updating the job
    } catch (error) {
      setMessage("An error occurred while updating the job.");
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    // Logic to save changes
  };

  const handleClearClick = () => {
    // Clear all fields
    setTitle("");
    setLocation("");
    setIsRemoteAllowed(false);
    setPerks("");
    setTimeZone("");
    setMinimumExperience(0);
    setJobType("");
    setSalaryBudget(0);
    setDescription("");
    setResponsibilities("");
    setQualifications("");
    setStatus("");
  };

  const handleClose = () => {
    onClose();
    setMessage(""); // Reset message when closing modal
  };

  if (!isOpen) return null;

  return (
    <div
      id="viewUpdateJobModal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 pt-96"
    >
      <div className="relative p-4 w-full max-w-2xl h-auto md:h-auto ">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              View and Update Job Details
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="jobTitle"
                    id="jobTitle"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter job title"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    name="location"
                    id="location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Job Location"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="isRemoteAllowed"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Is Remote Allowed
                  </label>
                  <select
                    name="isRemoteAllowed"
                    id="isRemoteAllowed"
                    value={isRemoteAllowed}
                    onChange={(e) => setIsRemoteAllowed(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="jobtype"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Type
                  </label>
                  <select
                    name="jobtype"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    id="jobtype"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="FULL_TIME">Full-Time</option>
                    <option value="CONTRACT">Part-Time</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="salary"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Salary
                  </label>
                  <input
                    type="number"
                    value={salaryBudget}
                    onChange={(e) => setSalaryBudget(e.target.value)}
                    name="salary"
                    id="salary"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter salary range"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Minimum Experience
                  </label>
                  <input
                    type="number"
                    value={minimumExperience}
                    onChange={(e) => setMinimumExperience(e.target.value)}
                    name="experience"
                    id="experience"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Minimum experience required"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="perks"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Perks
                  </label>
                  <input
                    type="text"
                    value={perks}
                    onChange={(e) => setPerks(e.target.value)}
                    name="perks"
                    id="perks"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Great health benefits"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="timezone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Time Zone
                  </label>
                  <input
                    type="text"
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    name="timezone"
                    id="timezone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="IST"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write job description here"
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="Responsibilities"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Responsibilities
                  </label>
                  <textarea
                    id="Responsibilities"
                    value={responsibilities}
                    onChange={(e) => setResponsibilities(e.target.value)}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Job Responsibilities"
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="Qualifications"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Qualifications
                  </label>
                  <textarea
                    id="Qualifications"
                    value={qualifications}
                    onChange={(e) => setQualifications(e.target.value)}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Qualifications Required"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="jobstatus"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Status
                  </label>
                  <select
                    name="jobstatus"
                    id="jobstatus"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="ACTIVE">Active</option>
                    <option value="INACTIVE">Disable</option>
                  </select>
                </div>
              </div>
            <button
              type="button"
              onClick={handleEditClick}
              disabled={isEditMode}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-naone focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Edit Details
            </button>
            <button
              type="button"
              onClick={handleSaveClick}
              disabled={!isEditMode}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Save Details
            </button>
            <button
              type="button"
              onClick={handleClearClick}
              disabled={!isEditMode}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Clear Details
            </button>
            {message && (
              <p className="text-sm text-red-500 mt-2">{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewUpdateJobModal;
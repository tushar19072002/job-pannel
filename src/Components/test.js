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
              type="submit"
              onClick={handleCreateJobClick}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Create Job
            </button>
            {message && (
              <p className="text-sm text-red-500 mt-2">{message}</p>
            )}
          </form>
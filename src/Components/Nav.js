import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import JobModal from './JobModal';
import Logo from "../images/logo.jpg"

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
    localStorage.clear();
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleCreateJobClick = () => {
    setIsModalOpen(true);
  };

  const handleHomeClick = () => {
    navigate('/dashboard');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-16" alt="Flowbite Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Thinkscoop Technologies</span> */}
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleHomeClick}
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Home
                </button>
                <button
                  onClick={handleCreateJobClick}
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Create a Job
                </button>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleLoginClick}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      <JobModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Nav;

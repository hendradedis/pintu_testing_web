import React from "react";
import "./styles.css";
import imageLogo from "../../assets/Image/pintuLogo.png";

const StaticHeader = () => {
  return (
    <nav className="bg-white border-gray-200 px-72 xs:px-8 py-5 rounde justify-between">
      <div className="flex flex-wrap  mx-auto">
        <a
          href="https://pintu.co.id/"
          className="flex items-center"
        >
          <div className='justify-center'>
            <img
              src={imageLogo}
              className="h-4 w-20 justify-items-center sm:h-5"
              alt="pintu Logo"
            />
          </div>
        </a>
        <div className="flex items-center md:order-2 justify-end">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <div className="inline-flex items-center">
              <svg
                className="h-7.5 w-7.5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                id="flag-icon-css-de"
                viewBox="0 0 512 512"
              >
                <path fill="#fff" d="M0 341.3h512V512H0z" />
                <path fill="black" d="M0 170.7h512v170.6H0z" />
              </svg>
            </div>
          </button>
          {/* <!-- Dropdown --> */}
          <button
            data-collapse-toggle="mobile-menu-language-select"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="mobile-menu-language-select"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              // aria-hidden="true"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-64"
          id="mobile-menu-language-select"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-sans text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Fitur
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-sans text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                PTU
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-sans text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Edukasi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-sans text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Ikut Kami
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-sans text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blog & news
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-sans text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Karir
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StaticHeader;

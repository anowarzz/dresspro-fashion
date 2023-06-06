"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faCaretDown,
  faCaretSquareDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  // Function to handle hover state
  const handleDropdownHover = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  // Use useEffect to reset dropdown state after a certain time
  useEffect(() => {
    let timeout;

    if (isDropdownActive) {
      timeout = setTimeout(() => {
        setIsDropdownActive(false);
      }, 5000); // Set the desired time in milliseconds
    }

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, [isDropdownActive]);

  return (
    <div className="z-50 relative px-4 bg-white py-6 md:py-7 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <span className="ml-2 text-xl font-bold tracking-wide text-blue-600 uppercase">
            Dress Pro Fashion
          </span>
        </Link>
        <ul className="hidden items-center  space-x-8 lg:flex">
          <li>
            <Link
              href="/"
              className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:border-b-2 hover:border-b-blue-600"
            >
              Home
            </Link>
          </li>
          <li className="relative group" onClick={handleDropdownHover}>
            <Link
              href="/"
              className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:border-b-2 hover:border-b-blue-600 "
            >
              <p>
                {" "}
                Products <FontAwesomeIcon icon={faChevronDown} />
              </p>

              {isDropdownActive && (
                <div className=" bg-white absolute transition-all duration-1000 ease-linear top-12 -left-4  text-left px-8  py-2 ">
                  <ul className=" space-y-3 w-32 py-2 flex flex-col">
                    <li className="border-b-2 hover:border-b-blue-600">
                      <Link href="/">Men</Link>
                    </li>
                    <li className="border-b-2 hover:border-b-blue-600">
                      <Link href="/">Women</Link>
                    </li>
                    <li className="border-b-2 hover:border-b-blue-600">
                      <Link href="/">Kids</Link>
                    </li>
                  </ul>
                </div>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:border-b-2 hover:border-b-blue-600"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:border-b-2 hover:border-b-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className=" items-center hidden space-x-8 lg:flex"></ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 z-10 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen
                ? "absolute top-0 left-0 right-0 transition-all ease-in w-[100%] duration-500 h-full"
                : "absolute -top-96 -left-0 h-full transition-opacity  ease-out w-full duration-500"
            } `}
          >
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link
                    href="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                  >
                    <span className="ml-2 text-lg md:text-xl font-bold tracking-wide text-blue-600 uppercase">
                      Dress Pro Fashion
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition-all duration-500 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4 text-center text-teal-600 flex flex-col justify-center items-center">
                  <li>
                    <Link
                      href="/"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:border-b-2 hover:border-b-blue-600"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="relative">
                      <Link
                        href="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:border-b-2 hover:border-b-blue-600"
                        onClick={() => setIsDropdownActive(!isDropdownActive)}
                      >
                        Products <FontAwesomeIcon icon={faChevronDown} />
                      </Link>

                      {isDropdownActive && (
                        <ul className=" space-y-3 w-32 py-2 flex flex-col text-center justify-center items-center">
                          <li className="border-b-2 hover:border-b-blue-600">
                            <Link href="/">Men</Link>
                          </li>
                          <li className="border-b-2 hover:border-b-blue-600">
                            <Link href="/">Women</Link>
                          </li>
                          <li className="border-b-2 hover:border-b-blue-600">
                            <Link href="/">Kids</Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:border-b-2 hover:border-b-blue-600"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:border-b-2 hover:border-b-blue-600"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

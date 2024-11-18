import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInstructorsOpen, setIsInstructorsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-[32px] font-semibold">Logo</div>

        <div className="hidden md:flex space-x-8">
          <button className="hover:text-teal-600">Courses</button>

          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setIsInstructorsOpen(!isInstructorsOpen)}
            >
              <span className="hover:text-teal-600">Instructors</span>
              <IoIosArrowDown size={16} />
            </div>
            {isInstructorsOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md w-32 rounded-lg z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Instructor 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Instructor 2
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setIsBlogOpen(!isBlogOpen)}
            >
              <span className="hover:text-teal-600">Blog</span>
              <IoIosArrowDown size={16} />
            </div>
            {isBlogOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md w-32 rounded-lg z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Blog 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Blog 2
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-teal-600">
            About
          </a>
          <a href="#" className="hover:text-teal-600">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M29.9862 24.765L28.2037 9.765C28.1459 9.27627 27.91 8.82602 27.541 8.50039C27.172 8.17475 26.6959 7.99659 26.2037 8H22C22 6.4087 21.3679 4.88258 20.2426 3.75736C19.1174 2.63214 17.5913 2 16 2C14.4087 2 12.8826 2.63214 11.7574 3.75736C10.6321 4.88258 10 6.4087 10 8H5.79125C5.29913 7.99659 4.82302 8.17475 4.45403 8.50039C4.08504 8.82602 3.84906 9.27627 3.79125 9.765L2.00875 24.765C1.97608 25.045 2.00296 25.3287 2.08762 25.5975C2.17228 25.8664 2.31281 26.1143 2.5 26.325C2.68854 26.5366 2.91957 26.7061 3.17803 26.8224C3.43649 26.9387 3.71657 26.9992 4 27H27.99C28.2751 27.0006 28.5571 26.9408 28.8174 26.8245C29.0777 26.7081 29.3103 26.5379 29.5 26.325C29.6863 26.1139 29.8259 25.8658 29.9097 25.5969C29.9935 25.3281 30.0196 25.0446 29.9862 24.765ZM16 4C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8H12C12 6.93913 12.4214 5.92172 13.1716 5.17157C13.9217 4.42143 14.9391 4 16 4ZM4 25L5.79125 10H10V13C10 13.2652 10.1054 13.5196 10.2929 13.7071C10.4804 13.8946 10.7348 14 11 14C11.2652 14 11.5196 13.8946 11.7071 13.7071C11.8946 13.5196 12 13.2652 12 13V10H20V13C20 13.2652 20.1054 13.5196 20.2929 13.7071C20.4804 13.8946 20.7348 14 21 14C21.2652 14 21.5196 13.8946 21.7071 13.7071C21.8946 13.5196 22 13.2652 22 13V10H26.2187L27.99 25H4Z"
              fill="#287279"
            />
          </svg>
          <button className="flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[#287279] text-white">
            Login
          </button>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiOutlineMenu size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="py-2 space-y-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Courses
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Instructors
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              About
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

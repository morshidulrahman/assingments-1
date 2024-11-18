import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import headerPic from "../assets/header.png";
import "./header.css";

export default function Header() {
  return (
    <div className="bg-[#F0F1EE] w-full">
      <div className="grid grid-cols-1 px-4 lg:grid-cols-2 gap-12 items-center container mx-auto">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <span className=" text-[#FF9700] flex gap-2 text-[24px]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
            <span className="font-normal text-[24px]">4.9 (566)</span>
          </div>
          <h1 className="text-[48px] font-bold leading-[56px]">
            #1 Platform Powering Health and Wellness
          </h1>
          <p className="text-[24px] font-medium leading-[32px] mt-10">
            We are restoring home as the primary place of personal well-being
          </p>
          <p className="font-normal text-[16px] leading-[24px] my-6">
            Health is not just about what you are eating. Its also about what
            you are thinking and saying
          </p>
          <div className="flex gap-4">
            <button className="bg-primaryColor border-2 border-primaryColor text-white rounded-[32px] py-[15px] px-6">
              Browse Courses
            </button>
            <button className="bg-transparent border-2 border-primaryColor text-primaryColor rounded-[32px] py-[15px] px-6">
              Get Started
            </button>
          </div>
        </div>
        <div
          className="min-h-[760px] header_img relative flex items-end bg-no-repeat p-2 rounded-[18px] bg-cover"
          style={{ backgroundImage: `url(${headerPic})` }}
        >
          <div className="bg-[#ffffffb3] w-full rounded-[17px] backdrop-blur-[12px]">
            <div className="flex flex-col md:flex-row items-center py-6 px-8">
              <p className="font-black text-center md:text-left text-[48px] leading-[56px] pr-6 mr-6 md:border-r border-[#00000080]">
                12,000+
              </p>
              <p className="font-normal text-center md:text-left md:max-w-[250px] text-[24px] leading-8">
                Happy learners rely on us regularly
              </p>
            </div>
            <div className="flex items-center py-6 px-8 bg-[#ffffff99] backdrop-blur-[12px] rounded-[17px] gap-[34px]">
              <p className="text-[16px] font-medium leading-6">
                Find your wellbeing
              </p>
              <p className="text-[#00000099] max-w-[330px] text-[13px] leading-5">
                By prioritizing self-care and making informed choices, one can
                enhance their overall quality of life
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

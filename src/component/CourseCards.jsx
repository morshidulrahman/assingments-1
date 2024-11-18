import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { PiTimerFill } from "react-icons/pi";
import { FaBookOpen, FaRegHeart, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";

import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";
import men from "../assets/men.png";
import men1 from "../assets/men1.png";
import men2 from "../assets/men2.png";
import men3 from "../assets/men3.png";

const cdata = [
  {
    id: 1,
    pic: course1,
    tags: ["Beginner", "Nutrition and Diet"],
    cname: "Foundation of Sleep: Sleep Science and Sleep Disorders",
    rating: 4.9,
    ratingCount: 566,
    chour: 6,
    cmin: 34,
    clesson: 3,
    instractorname: "Killan Murphe",
    cprice: 40,
    apic: men,
  },
  {
    id: 2,
    apic: men1,
    pic: course4,
    tags: ["Beginner", "Nutrition and Diet"],
    cname: "Parenting in the Digital Age: Navigating Screen Time",
    rating: 4.9,
    ratingCount: 566,
    chour: 6,
    cmin: 34,
    clesson: 3,
    instractorname: "Killan Murphe",
    cprice: 40,
  },
  {
    id: 3,
    pic: course2,
    apic: men2,
    tags: ["Beginner", "Nutrition and Diet"],
    cname: "Holistic Health: Integrating Mind, Body, and Spirit ",
    rating: 4.9,
    ratingCount: 566,
    chour: 6,
    cmin: 34,
    clesson: 3,
    instractorname: "Killan Murphe",
    cprice: 40,
  },
  {
    id: 4,
    pic: course3,
    apic: men3,
    tags: ["Beginner", "Nutrition and Diet"],
    cname: "Foundation of Sleep: Sleep Science and Sleep Disorders",
    rating: 4.9,
    ratingCount: 566,
    chour: 6,
    cmin: 34,
    clesson: 3,
    instractorname: "Killan Murphe",
    cprice: 40,
  },
  {
    id: 5,
    pic: course1,
    apic: men3,
    tags: ["Beginner", "Nutrition and Diet"],
    cname: "Holistic Health: Integrating Mind, Body, and Spirit ",
    rating: 4.9,
    ratingCount: 566,
    chour: 6,
    cmin: 34,
    clesson: 3,
    instractorname: "Killan Murphe",
    cprice: 40,
  },
  {
    id: 6,
    pic: course2,
    apic: men2,
    tags: ["Beginner", "Nutrition and Diet"],
    cname: "Foundation of Sleep: Sleep Science and Sleep Disorders",
    rating: 4.9,
    ratingCount: 566,
    chour: 6,
    cmin: 34,
    clesson: 3,
    instractorname: "Killan Murphe",
    cprice: 40,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="border border-gray-300 hover:border-gray-800 rounded-full  text-gray-300 hover:text-gray-800  h-12 w-12 absolute flex justify-center items-center -top-28 right-14"
    >
      <SlArrowRight className="text-2xl" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="border border-gray-300 hover:border-gray-800  text-gray-300 hover:text-gray-800  rounded-full  h-12 w-12 absolute flex justify-center items-center -top-28 right-36"
    >
      <SlArrowLeft className="text-2xl" />
    </div>
  );
}

const CourseCards = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-24 mb-16 container mx-auto px-4">
      <div className="pb-20 md:pb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Our popular courses
        </h1>
        <h1 className="text-lg text-gray-500 mb-16 md:w-1/2 w-[80%]">
          By taking proactive steps to nurture mental health, we can enhance our
          quality of life, build resilience, and foster a sense of inner peace
          and balance
        </h1>
      </div>

      <div className="slider-container relative  ">
        <Slider {...settings}>
          {cdata?.map((item, index) => (
            <div key={index} className="px-3 pb-4">
              <div className="max-w-sm w-full bg-white rounded-lg hover:shadow-lg hover:bg-violet-50 overflow-hidden border border-gray-200 group relative ">
                <div className="">
                  <img
                    className="object-cover h-64 w-full"
                    src={item.pic}
                    alt="Converse sneakers"
                  />
                </div>

                <div className="group-hover:opacity-100 opacity-0 flex gap-2 absolute top-4 right-4">
                  <span className="flex h-10 w-10 rounded-full bg-gray-100 items-center justify-center text-gray-600">
                    <LuShoppingCart className="size-5" />
                  </span>
                  <span className="flex h-10 w-10 rounded-full bg-gray-100 items-center justify-center text-gray-600">
                    <FaRegHeart className="size-5" />
                  </span>
                </div>

                <div className="flex flex-col gap-1 mt-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="font-normal bg-[#ff97001a] px-2 py-1 border-2 border-[#ff970080] rounded-md ">
                      {" "}
                      {item.tags[0]}
                    </span>
                    <span className="font-normal bg-[#cde53333] px-2 py-1 border-2 border-[#CDE533] rounded-md ">
                      {" "}
                      {item.tags[1]}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.cname}
                  </h2>

                  <div className="flex items-center mb-6">
                    <div className="flex gap-1 items-center text-[#FF9700]">
                      <FaStar /> <FaStar />
                      <FaStar />
                      <FaStar /> <FaRegStarHalfStroke />
                    </div>
                    <div className="ml-2">
                      {item.rating} ({item.ratingCount})
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <PiTimerFill className="text-[#9998E1] text-xl" />{" "}
                      {item.chour}h {item.cmin}m{" "}
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      {" "}
                      <FaBookOpen className="text-[#9998E1] text-xl" />{" "}
                      {item.clesson} Lessons
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 border-t border-gray-200 ">
                  <div className="w-full flex justify-between items-center font-bold cursor-pointer  text-gray-800 ">
                    <div className="flex items-center gap-2">
                      <img
                        className="object-cover h-10 w-10 rounded-full"
                        src={item.apic}
                        alt="Converse sneakers"
                      />
                      <span className="text-base">{item.instractorname}</span>
                    </div>
                    <h1>$ {item.cprice}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CourseCards;

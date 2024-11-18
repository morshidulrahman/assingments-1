import React from "react";
import Slider from "react-slick";

import Frame1 from "../assets/Frame.png";
import men from "../assets/men.png";

const fakeData = [
  {
    id: 1,
    name: "Harry Potter",
    image: men,
    quote:
      "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging.",
  },
  {
    id: 2,
    name: "Hermione Granger",
    image: men,
    quote:
      "EduPath has been a game-changer for my learning journey. The courses are well-structured and easy to follow.",
  },
  {
    id: 3,
    name: "Ron Weasley",
    image: men,
    quote:
      "The instructors are very knowledgeable, and the platform is user-friendly. I highly recommend it to anyone.",
  },
  {
    id: 4,
    name: "Albus Dumbledore",
    image: men,
    quote:
      "Education is the key to success, and EduPath provides a robust way to achieve it with quality content.",
  },
  {
    id: 5,
    name: "Severus Snape",
    image: men,
    quote:
      "The advanced courses have truly challenged me to grow and develop my skills. Great job, EduPath!",
  },
];

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-10">
      <h1 className="text-black text-center font-onest text-[40px] font-semibold leading-[48px] tracking-[-0.2px] md:w-[60%] mx-auto w-[90%]">
        Learners love EduPath. See why they rate us 4.9 out of 5
      </h1>
      <div className="py-[60px]">
        <div className="slider-container">
          <Slider {...settings}>
            {fakeData.map((person) => (
              <div key={person.id} className="px-4">
                <div className="flex flex-col gap-4 p-8 rounded-[13px] border border-[rgba(153,152,225,0.5)] bg-[rgba(153,152,225,0.2)]">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <p className="text-[var(--Black-100,#000)] font-onest text-[16px] font-semibold leading-[24px] tracking-[-0.08px] pt-4 mb-6">
                        {person.name}
                      </p>
                    </div>
                    <div>
                      <img src={Frame1} alt="frame" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[var(--Black-100,#000)] font-onest text-[16px] font-semibold leading-[24px] tracking-[-0.08px]">
                      "{person.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "CARLEE A. B.",
    title: "Perfect Fit",
    image: "https://img.ebdcdn.com/cms/2_cc1c0f9eda.png",
    content:
      "The website was easy to use, the glasses shipped quickly, and I get nothing but compliments on my new glasses! Thanks!!",
  },
  {
    name: "PAUHOV X.",
    title: "Awesome!",
    image: "https://img.ebdcdn.com/cms/2_cc1c0f9eda.png",
    content:
      "These glasses fit perfectly! They are super lightweight, yet also feel very sturdy at the same time. The colors and design are beautiful. Will be a returning customer!",
  },
  {
    name: "SAMANTHA J.",
    title: "I LOVE EyeBuyDirect",
    image: "https://img.ebdcdn.com/cms/2_cc1c0f9eda.png",
    content:
      "It's so user-friendly and the customer service is incredible! I tell everyone who compliments my glasses to use this site. Thank you!",
  },
  {
    name: "ALEX T.",
    title: "Great Quality",
    image: "https://img.ebdcdn.com/cms/2_cc1c0f9eda.png",
    content:
      "I love the style and quality of these glasses. I always get compliments on them and will definitely be buying more!",
  },
];

function CustomArrow({ className, onClick, direction }) {
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${
        direction === "left" ? "left-4" : "right-4"
      } w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-300 hover:bg-yellow-500 transition`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 text-gray-800 hover:text-white"
      >
        {direction === "left" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

export default function ReviewSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          The reviews are in!
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-[320px] hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 rounded-full border-4 border-gray-200 shadow-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{review.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-4">{review.title}</p>
                  <p className="text-gray-600 text-center">{review.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

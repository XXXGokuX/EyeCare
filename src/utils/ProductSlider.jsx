"use client";

import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ProductSlider({ title, products, shopAllLink, shopAllText }) {
  const sliderRef = useRef(null);

  // Custom arrows for better styling
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 -translate-x-4"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 translate-x-4"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    );
  };

  // Slick settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className=" text-3xl md:text-5xl font-bold text-center mb-8">{title}</h2>

        <div className="relative">
          <Slider {...sliderSettings} ref={sliderRef}>
            {products.map((product, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative">
                    {product.discount > 0 && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm font-medium rounded">
                        {product.discount}% OFF
                      </div>
                    )}
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full aspect-square object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium">
                      {product.name} ₹{product.currentPrice}{" "}
                      <span className="text-gray-400 line-through">
                      ₹{product.originalPrice}
                      </span>
                    </h3>
                    <div className="flex justify-center gap-2 mt-2">
                      {product.colors.map((color, colorIndex) => (
                        <button
                          key={colorIndex}
                          className={`w-6 h-6 rounded-full border-2 border-gray-300 ${color.class}`}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-8">
          <a
            href={shopAllLink}
            className="inline-block min-w-[200px] border-2 border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
          >
            {shopAllText}
          </a>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { imagesProject } from "../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import { useNavigate } from "react-router";
import { Link } from "react-scroll";
import transition from "../transition";

const Header = () => {
  const [itemActive, setItemActive] = useState(0);
  const countItem = imagesProject.length;
  const navigate = useNavigate();

  const showSlider = (index) => {
    setItemActive(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
  };

  return (
    <section className="">
      <header className="text-[#eee] text-sm lg:text-base container mx-auto flex justify-between items-center font-sans z-50">
        <button
          onClick={() => navigate("/")}
          className="logo font-bold text-4xl hover:text-red-800 hover:cursor-pointer text-white border-none bg-inherit"
        >
          LD
        </button>
        <ul className="flex space-x-10 sm:gap-3 list-none font-bold">
          <li
            className="cursor-pointer hover:text-red-800"
            onClick={() => navigate("/")}
          >
            Início
          </li>
          <li className="cursor-pointer hover:text-red-800">
            <Link
              to="backend"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Back end
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:text-red-800">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Contate-me
            </Link>
          </li>
        </ul>
      </header>

      <div className="slider">
        <div className="list">
          {imagesProject.map((image, index) => (
            <div
              className={`item ${index === itemActive && "active"}`}
              key={index}
            >
              <img src={image.image} alt={image.name} />
              <div className="content p-4 font-sans lg:!left-[10%]  top-[12%]">
                <p className="lg:ml-[5px]">design</p>
                <h2 className="!text-[30px] md:!text-[60px] lg:!text-7xl lg:!ml-[2px] ">
                  {image.name}
                </h2>
                <p className="text-gray-200 lg:text-base lg:ml-2 text-sm lg:w-[600px]">
                  {image.description}
                </p>
                <div className="space-x-4 lg:ml-[7px]">
                  <a href={image.project} target="_blank" className="cursor-pointer text-white tracking-[2px] link-customizado  font-bold hover:text-red-800">
                    Ver projeto
                  </a>
                  <a href={image.github} target="_blank" className="cursor-pointer text-white tracking-[2px] link-customizado  font-bold hover:text-red-800">
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button
            className="hover:cursor-pointer"
            onClick={() =>
              setItemActive((prevItemActive) =>
                prevItemActive === 0 ? countItem - 1 : prevItemActive - 1
              )
            }
          >
            {"<"}
          </button>
          <button
            className="hover:cursor-pointer"
            onClick={() =>
              setItemActive((prevItemActive) =>
                prevItemActive === countItem - 1 ? 0 : prevItemActive + 1
              )
            }
          >
            {">"}
          </button>
        </div>
        <div className="flex overflow-y-hidden justify-center items-center">
          <div className="thumbnail hover:cursor-pointer lg:right-[10%] !overflow-hidden lg:w-[50%] w-[100%] hidden md:block">
            <Slider {...settings}>
              {imagesProject.map((image, index) => (
                <div
                  className={`item ${index === itemActive && "active"}`}
                  key={index}
                >
                  <img
                    src={image.imageMobile}
                    alt={image.name}
                    onClick={() => showSlider(index)}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="thumbnail hover:cursor-pointer w-[100%] lg:bottom-[50] bottom-[100] flex gap-4 !p-4 md:hidden ">
            {imagesProject.map((image, index) => (
              <div
                className={`item !h-[170px] !w-[130px] ${
                  index === itemActive && "active"
                }`}
                key={index}
              >
                <img
                  src={image.imageMobile}
                  alt={image.name}
                  onClick={() => showSlider(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default transition(Header);

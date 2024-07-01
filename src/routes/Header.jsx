import React, { useState, useEffect } from "react";
import { imagesProject } from "../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import { useNavigate } from "react-router";
import { Link } from "react-scroll";

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
        <div className="logo font-bold text-4xl hover:text-red-800 hover:cursor-pointer">
          LD
        </div>
        <ul className="flex space-x-10 sm:gap-3 list-none font-bold">
          <li className="cursor-pointer hover:text-red-800" onClick={() => navigate('/')}>Início</li>
          <li className="cursor-pointer hover:text-red-800">Back end</li>
          <li className="hover:cursor-pointer hover:text-red-800">
            <Link   to="contact" spy={true} smooth={true} offset={-70} duration={500}>
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
              <div className="content p-4 font-sans lg:!left-[10%] top-[12%]">
                <p>design</p>
                <h2 className="!text-[30px] md:!text-[60px] lg:!text-8xl ">
                  {image.name}
                </h2>
                <p className="text-gray-200 lg:text-base lg:ml-2 text-sm lg:w-[600px]">
                  {image.description}
                </p>
                <div className="space-x-4 ml-[5px]">
                  <a className=" text-white tracking-[2px] link-customizado  font-bold hover:text-red-800">
                    Ver projeto
                  </a>
                  <a className=" text-white tracking-[2px] link-customizado  font-bold hover:text-red-800">
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button
            onClick={() =>
              setItemActive((prevItemActive) =>
                prevItemActive === 0 ? countItem - 1 : prevItemActive - 1
              )
            }
          >
            {"<"}
          </button>
          <button
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
          <div className="thumbnail !overflow-hidden lg:w-[50%] w-[100%] hidden md:block">
            <Slider {...settings}>
              {imagesProject.map((image, index) => (
                <div
                  className={`item ${index === itemActive && "active"}`}
                  key={index}
                >
                  <img
                    src={image.image}
                    alt={image.name}
                    onClick={() => showSlider(index)}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="thumbnail w-[100%] !bottom-0 flex gap-4 !p-4 md:hidden ">
            {imagesProject.map((image, index) => (
              <div
                className={`item !h-[170px] !w-[130px] ${
                  index === itemActive && "active"
                }`}
                key={index}
              >
                <img
                  src={image.image}
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

export default Header;

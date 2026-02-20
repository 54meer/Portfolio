import React from "react";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ project }) => {
    const { title, description, image, stack, url, github } = project;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: true
    };


    return (
        <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden w-full max-w-md mx-auto">
            {image && image.length > 0 && (
                <Slider {...sliderSettings}>
                    {image.map((imgSrc, idx) => (
                        <img
                            key={idx}
                            src={imgSrc}
                            alt={`${title} screenshot ${idx + 1}`}
                            className="w-full h-48 object-cover rounded-t-xl"
                        />
                    ))}
                </Slider>
            )}

            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {stack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Preview <FaExternalLinkAlt />
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900"
                        >
                            Code <FaGithub />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
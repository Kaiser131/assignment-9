import { useState } from "react";
import carousel from '../../../public/images/luxury-banner-2.jpg';

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Beauty is not a option",
            description: "This is the first slide description."
        },
        {
            title: "Slide 2",
            description: "This is the second slide description."
        },
        {
            title: "Slide 3",
            description: "This is the third slide description."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <div>


            <div className="relative h-[500px] overflow-hidden bg-cover bg-center">
                <img className="h-[448px] w-full " src={carousel} alt="" />

                <div className=" flex items-center mt-[-320px]  justify-center  mx-auto ">

                    {/* Carousel Slide with Blurry Background */}
                    <div className="absolute flex flex-col items-center justify-center text-center bg-black bg-opacity-0 backdrop-blur-md text-white p-8 rounded-lg transition-all duration-500">
                        <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h1>
                        <p className="text-lg">{slides[currentSlide].description}</p>
                    </div>

                    {/* Previous and Next Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none"
                    >
                        &gt;
                    </button>
                </div>



            </div>




        </div>
    );
};

export default Carousel;
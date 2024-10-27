import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import Countries from "../Countries/Countries";
import Exceptional from "../Exceptional/Exceptional";
import NavBar from "../NavBar/NavBar";
import Professional from "../Professional/Professional";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Exceptional></Exceptional>
            <Carousel></Carousel>
            <Professional></Professional>
            <Countries></Countries>
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
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
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import Countries from "../Countries/Countries";
import Exceptional from "../Exceptional/Exceptional";
import Footer from "../Footer/Footer";
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
            <Footer></Footer>
        </div>
    );
};

export default Home;
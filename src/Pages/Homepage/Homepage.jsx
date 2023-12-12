import Navbar from "../../Components/Navbar/Navbar";
import AboutMe from "../../Sections/AboutMe/AboutMe";
import Banner from "../../Sections/Banner/Banner";
import Footer from "../../Sections/Footer/Footer";


const Homepage = () => {
    return (
        <div className="overflow-hidden bg-[#002939] ">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>

            <Footer></Footer>
        </div>
    );
};

export default Homepage;
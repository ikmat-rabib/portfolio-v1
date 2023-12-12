import Navbar from "../../Components/Navbar/Navbar";
import AboutMe from "../../Sections/AboutMe/AboutMe";
import Banner from "../../Sections/Banner/Banner";
import Contact from "../../Sections/Contact/Contact";
import Footer from "../../Sections/Footer/Footer";


const Homepage = () => {
    return (
        <div className="overflow-hidden bg-[#004966] ">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
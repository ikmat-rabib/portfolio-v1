import Navbar from "../../Components/Navbar/Navbar";
import AboutMe from "../../Sections/AboutMe/AboutMe";
import Banner from "../../Sections/Banner/Banner";
import Contact from "../../Sections/Contact/Contact";
import Footer from "../../Sections/Footer/Footer";
import MySkills from "../../Sections/MySkills/MySkills";
import Projects from "../../Sections/Projects/Projects";


const Homepage = () => {
    return (
        <div className="overflow-hidden bg-[#004966] ">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
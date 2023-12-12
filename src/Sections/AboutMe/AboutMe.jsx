import Container from "../../Components/Container/Container";
import SectionTitle from "../../hooks/SectionTitle/SectionTitle";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className="bg-[#004966]">
            <Container>
                <SectionTitle heading="About Me" subHeading=""></SectionTitle>
                <div className="md:flex justify-between items-center">


                    <div className="md:w-1/2 flex flex-col md:mx-auto items-center justify-center space-y-5">

                        <div className="w-80 h-60 border-0 bg-[#02C39A]  rounded-lg relative ">
                            {/* <img className="w-80 rounded-lg shadow-2xl  absolute bottom-5 left-5" src="https://i.ibb.co/xhvZSHk/trainers.jpg" alt="" /> */}
                        </div>

                        <div className="flex gap-3 justify-center">

                            <a href="https://github.com/ikmat-rabib" target="blank" >
                                <FaGithub className="text-3xl text-[#02C39A] border-0 hover:text-[#02C39A] bg-transparent hover:bg-transparent  "></FaGithub>
                            </a>

                            <a href="https://www.linkedin.com/in/ikmat-rabib-19b608144" target="blank" >
                                <FaLinkedin className="text-3xl text-[#02C39A] border-0 hover:text-[#02C39A] bg-transparent hover:bg-transparent "></FaLinkedin >
                            </a>


                        </div>

                    </div>


                    <div className="md:w-1/2 p-3 md:p-0 space-y-5">

                        <p className="font-medium text-slate-200">Hello, I'm Ikmatul Islam Rabib, a dedicated front-end web developer on a mission to create visually stunning and user-friendly websites. With a passion for Front-End Development, I bring ideas to life by combining design and technology. My journey in web development is fueled by continuous learning, and I'm excited to embark on new challenges and collaborations. Let's build something amazing together!
                        </p>

                        <div className="flex gap-1">
                            <div>
                                <p>Name: Ikmatul Islam Rabib</p>
                                <p>From: Bangladesh</p>
                            </div>
                            <div>
                                <p>fyukfyuk</p>
                                <p>fgm</p>
                            </div>
                            <div>
                                <p>dj</p>
                                <p>fgn</p>
                            </div>
                        </div>

                        <button className="btn btn-success ">fghfghfjj</button>

                    </div>

                </div>
            </Container>
        </div>
    );
};

export default AboutMe;
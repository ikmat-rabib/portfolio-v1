import Container from "../../Components/Container/Container";
import SectionTitle from "../../hooks/SectionTitle/SectionTitle";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div id="about" className="bg-[#004966]">
            <Container>
                <SectionTitle heading="About" subHeading=""></SectionTitle>

                <div className="md:flex justify-between items-center">

                    <div className="md:w-1/2 flex flex-col md:mx-auto items-center justify-center space-y-5">

                        <div style={{ borderRadius: '43% 57% 14% 86% / 78% 21% 79% 22%' }} className="w-72 h-52 border-0 bg-[#00A896] md:mt-10  relative ">
                            <img style={{ borderRadius: '43% 57% 14% 86% / 78% 21% 79% 22%' }} className="  shadow-2xl  absolute bottom-5 right-5" src="https://i.ibb.co/xhvZSHk/trainers.jpg" alt="" />
                        </div>

                        <div className="flex gap-3 justify-center">

                            <a href="https://github.com/ikmat-rabib" target="blank">
                                <FaGithub className="text-4xl text-[#02C39A] border-0 hover:text-[#00F5C0] hover:scale-105 transition  "></FaGithub>
                            </a>

                            <a href="https://www.linkedin.com/in/ikmat-rabib-19b608144" target="blank" >
                                <FaLinkedin className="text-4xl text-[#02C39A] border-0 hover:text-[#00F5C0] hover:scale-105 transition  "></FaLinkedin >
                            </a>


                        </div>

                    </div>


                    <div className="md:w-1/2  space-y-5">

                        <p className="text-justify text-[#e2e3cede]">Hello, <br /> I'm Ikmatul Islam Rabib, a dedicated front-end web developer on a mission to create user-friendly websites. With a passion for Front-End Development, I bring ideas to life by combining design and technology. My journey in web development is fueled by continuous learning. Let's build something amazing together!
                        </p>

                        <div className="flex justify-between">

                            <div>
                                <p>Name: <span className=" font-medium text-[#E2E3CE] mb-3">Ikmatul Islam Rabib</span></p>
                                <p>From: <span className=" font-medium text-[#E2E3CE] mb-3">Dinajpur, Bangladesh</span></p>
                            </div>

                            <div>
                                <p>Call: <span className=" font-medium text-[#E2E3CE] mb-3">+88 0011223344</span></p>
                                <p>Email: <span className=" font-medium text-[#E2E3CE] mb-3">ikmat.rbb@gmail.com</span></p>
                            </div>

                        </div>

                        <a href="/public/resume/Assignment-2-(SCIC).pdf" download="Assignment-2-(SCIC).pdf" className="btn btn-outline border-[#00A896] text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 hover:border-0 ">download resume</a>

                    </div>

                </div>
                
            </Container>
        </div>
    );
};

export default AboutMe;
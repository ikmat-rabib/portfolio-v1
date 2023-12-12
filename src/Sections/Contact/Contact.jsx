import { FaGithub, FaLinkedin, FaLocationDot, FaMobileScreen } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import Container from "../../Components/Container/Container";
import SectionTitle from "../../hooks/SectionTitle/SectionTitle";


const Contact = () => {
    return (
        <div id="contact" className="">
            <Container>
                <SectionTitle heading="Contact Me" subHeading=""></SectionTitle>
                <div className="flex ">

                    <div className="md:w-1/2 p-[34px] flex items-center justify-center">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <FaMobileScreen className="text-3xl text-[#02C39A] " />
                                <div>
                                    <h4 className="text-[#F0F3BD] font-medium">Call Me:</h4>
                                    <p className="text-[#E2E3CE]">+88 001122334455</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdMailOutline className="text-3xl text-[#02C39A] " />
                                <div>
                                    <h4 className="text-[#F0F3BD] font-medium">Mail Me:</h4>
                                    <p className="text-[#E2E3CE]">ikmat.rbb@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLocationDot className="text-3xl text-[#02C39A] " />
                                <div>
                                    <h4 className="text-[#F0F3BD] font-medium">Visit Me:</h4>
                                    <p className="text-[#E2E3CE]">Dinajpur, Bangladesh</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold text-[#F0F3BD] underline underline-offset-4 text-center mt-8">Find Me</h3>

                                <div className="flex gap-3 justify-center">

                                    <a href="https://github.com/ikmat-rabib" target="blank" >
                                        <FaGithub className="text-3xl text-[#02C39A] border-0 hover:text-[#02C39A] bg-transparent hover:bg-transparent  "></FaGithub>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ikmat-rabib-19b608144" target="blank" >
                                        <FaLinkedin className="text-3xl text-[#02C39A] border-0 hover:text-[#02C39A] bg-transparent hover:bg-transparent "></FaLinkedin >
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card shrink-0 w-1/2 shadow-2xl bg-transparent">
                        <form className="card-body ">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#F0F3BD]">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered bg-[#002939]" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#F0F3BD]">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered  bg-[#002939]" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#F0F3BD]">Message</span>
                                </label>
                                <textarea className="bg-[#002939]" name="message" id="" cols="30" rows="5"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#00a897a6] hover:bg-[#02C39A]  border-0 text-[#F0F3BD]">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
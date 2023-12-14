import { FaGithub, FaLinkedin, FaLocationDot, FaMobileScreen } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import emailjs from '@emailjs/browser';
import Container from "../../Components/Container/Container";
import SectionTitle from "../../hooks/SectionTitle/SectionTitle";
import { useRef } from "react";


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_rg98gtg',
            'template_utsekaf',
            form.current,
            'YzMvGVd5c_wXrIGLi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact" className="">
            <Container>
                <SectionTitle heading="Contact" subHeading=""></SectionTitle>
                <div className="md:flex ">

                    <div className=" w-full md:w-1/2 p-[34px] flex items-center justify-center">
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
                                        <FaGithub className="text-4xl text-[#02C39A] border-0 hover:text-[#00F5C0] hover:scale-105 transition"></FaGithub>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ikmat-rabib-19b608144" target="blank" >
                                        <FaLinkedin className="text-4xl text-[#02C39A] border-0 hover:text-[#00F5C0] hover:scale-105 transition"></FaLinkedin >
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full md:w-1/2 shadow-2xl bg-transparent">
                        <form className="card-body " ref={form} onSubmit={sendEmail}>

                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text text-[#F0F3BD]">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="name" className="input input-bordered bg-[#002939] text-[#F0F3BD]" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#F0F3BD]">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="email" className="input input-bordered  bg-[#002939] text-[#F0F3BD]" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#F0F3BD]">Message</span>
                                </label>
                                <textarea className="bg-[#002939] text-[#F0F3BD] rounded-lg px-4 py-2" name="message" id="" cols="30" rows="5" required></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value="Send" className="btn bg-[#00a897a6] hover:bg-[#02C39A]  border-0 text-[#F0F3BD]" />

                            </div>
                        </form>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
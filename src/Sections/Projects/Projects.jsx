import Container from "../../Components/Container/Container";
import SectionTitle from "../../hooks/SectionTitle/SectionTitle";


const Projects = () => {
    return (
        <div id="projects" className="bg-[#002939]">
            <Container>
                <SectionTitle heading="Projects" subHeading=""></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="card card-compact rounded-xl w-full bg-[#004966] shadow-xl hover:scale-105 hover:shadow-[#59bfe7] transition ">
                        <figure><img src="/src/assets/projects/@rena.PNG" alt="" /></figure>
                        <div className="card-body text-[#F0F3BD] space-y-2">
                            <h2 className="card-title text-justify">@rena - Event Management</h2>
                            <div className="h-[3px] w-full bg-[#02C39A] max-w-full"></div>
                            <div className="card-actions justify-between ">
                                <a href="https://assignment-9-firebase-68d3a.web.app/" target="blank" className="btn bg-[#00a897ab] border-0 text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 ">Live Link</a>
                                <a href="https://github.com/ikmat-rabib/arena-event-management" target="blank" className="btn bg-[#00a897ab] border-0 text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 ">github repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact rounded-xl w-full bg-[#004966] shadow-xl hover:scale-105 hover:shadow-[#59bfe7] transition">
                        <figure><img src="/src/assets/projects/fitz.PNG" alt="" /></figure>
                        <div className="card-body text-[#F0F3BD] space-y-2">
                            <h2 className="card-title text-justify">FitZ - Gym Website</h2>
                            <div className="h-[3px] w-full bg-[#02C39A] max-w-full"></div>
                            <div className="card-actions justify-between ">
                                <a href="https://assignment-12-c2bbc.web.app/" target="blank" className="btn bg-[#00a897ab] border-0 text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 ">Live Link</a>
                                <a href="https://github.com/ikmat-rabib/Fitz-gym-website-client-side" target="blank" className="btn bg-[#00a897ab] border-0 text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 ">github repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact rounded-xl w-full bg-[#004966] shadow-xl hover:scale-105 hover:shadow-[#59bfe7] transition">
                        <figure><img src="/src/assets/projects/waark.PNG" alt="" /></figure>
                        <div className="card-body text-[#F0F3BD] space-y-2">
                            <h2 className="card-title text-justify">Waark - Online Marketplace</h2>
                            <div className="h-[3px] w-full bg-[#02C39A] max-w-full"></div>
                            <div className="card-actions justify-between ">
                                <a href="https://juvenile-driving.surge.sh/" target="blank" className="btn bg-[#00a897ab] border-0 text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 ">Live Link</a>
                                <a href="https://github.com/ikmat-rabib/online-marketplace-client-side" target="blank" className="btn bg-[#00a897ab] border-0 text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 ">github repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Projects;
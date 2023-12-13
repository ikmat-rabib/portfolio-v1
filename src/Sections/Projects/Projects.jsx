import Container from "../../Components/Container/Container";
import SectionTitle from "../../hooks/SectionTitle/SectionTitle";


const Projects = () => {
    return (
        <div id="projects" className="bg-[#002939]">
            <Container>
                <SectionTitle heading="Projects" subHeading=""></SectionTitle>
                <div className="grid grid-cols-3 gap-3">
                    <div className="card card-compact rounded-lg w-full bg-[#004966] shadow-xl">
                        <figure><img src="" alt="" /></figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-justify">{ }</h2>
                            <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                            <div className="card-actions justify-between ">
                                <p>Author: { }</p>
                                <p className="text-end">{ }</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact rounded-lg w-full bg-[#004966] shadow-xl">
                        <figure><img src="" alt="" /></figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-justify">{ }</h2>
                            <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                            <div className="card-actions justify-between ">
                                <p>Author: { }</p>
                                <p className="text-end">{ }</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact rounded-lg w-full bg-[#004966] shadow-xl">
                        <figure><img src="" alt="" /></figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-justify">{ }</h2>
                            <div className="h-[3px] w-full bg-[#219bff] max-w-full"></div>
                            <div className="card-actions justify-between ">
                                <p>Author: { }</p>
                                <p className="text-end">{ }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Projects;
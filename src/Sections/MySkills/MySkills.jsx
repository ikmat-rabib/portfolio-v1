import Container from "../../Components/Container/Container";
import SectionTitle from "../../hooks/SectionTitle/SectionTitle";

const MySkills = () => {
    return (
        <div id="skills" className="bg-[#004966] md:pb-16">
            <Container>
                <SectionTitle heading="Skills" subHeading=""></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    
                    <div className="lg:my-2  ">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE] "> HTML </span>
                            <span className="font-bold text-[#E2E3CE] "> 92% </span>
                        </div>
                        <progress className="progress progress-accent " value="92" max="100"></progress>
                    </div>

                    <div className="lg:my-2 ">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE] "> Tailwind </span>
                            <span className="font-bold text-[#E2E3CE] "> 82% </span>
                        </div>
                        <progress className="progress progress-info " value="82" max="100"></progress>
                    </div>

                    <div className="lg:my-2 ">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE] "> CSS </span>
                            <span className="font-bold text-[#E2E3CE] "> 80% </span>
                        </div>
                        <progress className="progress progress-secondary " value="80" max="100"></progress>
                    </div>

                    <div className="lg:my-2 ">
                        <div className=" flex justify-between ">  
                            <span className="font-bold text-[#E2E3CE] "> JS </span>
                            <span className="font-bold text-[#E2E3CE] "> 73% </span>
                        </div>
                        <progress className="progress progress-warning  " value="73" max="100"></progress>
                    </div>

                    <div className="lg:my-2 ">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE] "> REACT </span>
                            <span className="font-bold text-[#E2E3CE] "> 70% </span>
                        </div>
                        <progress className="progress progress-primary " value="70" max="100"></progress>
                    </div>

                    <div className="lg:my-2 ">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE] "> Node </span>
                            <span className="font-bold text-[#E2E3CE] "> 65% </span>
                        </div>
                        <progress className="progress progress-success " value="65" max="100"></progress>
                    </div>
                    
                    <div className="lg:my-2 ">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE] "> Express </span>
                            <span className="font-bold text-[#E2E3CE] "> 70% </span>
                        </div>
                        <progress className="progress " value="70" max="100"></progress>
                    </div>

                    <div className="lg:my-2 ">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE] "> MongoDB </span>
                            <span className="font-bold text-[#E2E3CE] "> 68% </span>
                        </div>
                        <progress className="progress progress-secondary " value="68" max="100"></progress>
                    </div>

                    <div className="lg:my-2 ">
                        <div className=" flex justify-between ">
                            <span className="font-bold text-[#E2E3CE] "> Git & Github </span>
                            <span className="font-bold text-[#E2E3CE] "> 80% </span>
                        </div>
                        <progress className="progress progress-error  " value="80" max="100"></progress>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default MySkills;
import BannerLottie from "../../Components/BannerLottie/BannerLottie";
import wavedBorder from "/svg/layered-waves-haikei.svg"



const Banner = () => {
    return (
        < >
            <div className="px-3 py-5 md:py-0 md:px-6 lg:px-0 min-h-screen" style={{
                background: `url(${wavedBorder}) no-repeat center bottom`,
                backgroundSize: '100% auto',
                backgroundColor: "#002939",
            }}>
                <div className="flex items-center justify-between max-w-6xl mx-auto py-20" >
                    <div className="w-full text-center md:text-left md:w-7/12 text-[#F0F3BD] ">
                        <p className=" font-bold text-[#F0F3BD] mb-1">Hi, I'm <span className="text-[#00A896] text-xl font-extrabold uppercase">Ikmatul Islam Rabib,</span>
                        </p>
                        <h2 className="text-3xl font-bold uppercase mb-2">Passionate <span className="text-[#00A896] text-5xl font-extrabold">front-end developer</span></h2>
                        <p className="text-lg font-medium text-[#E2E3CE] mb-3"> I care about crafting seamless user experiences</p>
                        <div className="my-8 "></div>
                        <div className="flex gap-5 justify-center md:justify-normal">
                            <a href="/public/resume/Assignment-2-(SCIC).pdf" download="Assignment-2-(SCIC).pdf" className="btn btn-outline border-[#00A896] text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 hover:border-[#02C39A] ">download resume</a>
                            <a href="#projects"  className="btn bg-[#00a897ab] border-0 text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 ">see projects</a>
                        </div>

                    </div>

                    <div className="md:w-5/12 hidden  md:block">
                        <BannerLottie></BannerLottie>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
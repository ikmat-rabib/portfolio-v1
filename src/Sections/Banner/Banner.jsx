import BannerLottie from "../../Components/BannerLottie/BannerLottie";
import wavedBorder from "/svg/layered-waves-haikei.svg"



const Banner = () => {
    return (
        < >
            <div className="bg-[#002939] -z-10" style={{
                background: `url(${wavedBorder}) no-repeat center bottom`,
                backgroundSize: '100% auto',
            }}>
                <div className="flex items-center justify-between max-w-6xl mx-auto py-20" >
                    <div className="w-full text-center md:text-left md:w-7/12 text-[#F0F3BD] ">
                        <p className="text-lg font-bold text-[#F0F3BD] mb-1">Hi, I'm <span className="text-[#00A896] text-xl font-extrabold uppercase">Ikmatul Islam Rabib,</span>
                        </p>
                        <h2 className="text-5xl font-bold uppercase mb-2">Passionate <span className="text-[#00A896] font-extrabold">front-end developer</span></h2>
                        <p className="text-lg font- text-[#E2E3CE] mb-3"> I Care about crafting seamless user experiences</p>
                        <div className="my-8 "></div>
                        <div className="flex gap-5">
                            <a href="/public/resume/Assignment-2-(SCIC).pdf" download="Assignment-2-(SCIC).pdf" className="btn btn-outline border-[#00A896] text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 hover:border-0 ">download resume</a>
                            <a href="#projects"  className="btn bg-[#00a897a6] border-[#00A896] text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105 hover:border-0 ">see portfolio</a>
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
import BannerLottie from "../../Components/BannerLottie/BannerLottie";
import wavedBorder from "/svg/layered-waves-haikei.svg"



const Banner = () => {
    return (
        < >
            <div className="bg-[#002939]" style={{
                background: `url(${wavedBorder}) no-repeat center bottom`,
                backgroundSize: '100% auto',
            }}>
                <div className="flex items-center justify-between max-w-6xl mx-auto py-20" >
                    <div className="w-full text-center md:text-left md:w-7/12 text-[#F0F3BD] ">
                        <p className="text-lg font-bold text-[#F0F3BD] mb-1">Hi, I'm <span className="text-[#00A896] text-xl font-extrabold uppercase">Ikmatul Islam Rabib,</span>
                        </p>
                        <h2 className="text-5xl font-extrabold uppercase mb-2">Passionate <span className="text-[#00A896]">front-end developer</span></h2>
                        <p className="text-lg font- text-[#E2E3CE] mb-3"> I Care about crafting seamless user experiences</p>
                        <div className="my-8 "></div>
                        <button className="btn btn-outline border-[#00A896] text-xs hover:bg-[#02C39A]  text-[#F0F3BD] rounded-full uppercase hover:scale-105  ">get resume</button>

                    </div>
                    <div className="md:w-5/12 hidden md:block">
                        <BannerLottie></BannerLottie>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
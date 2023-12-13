

const Navbar = () => {

    const navOptions = <>
        <li><a className="hover:underline hover:underline-offset-4 hover:bg-none" href='#'>Home</a></li>
        <li><a className="hover:underline hover:underline-offset-4 hover:bg-none" href='#about'>About</a></li>
        <li><a className="hover:underline hover:underline-offset-4 hover:bg-none" href='#skills'>Skills</a></li>
        <li><a className="hover:underline hover:underline-offset-4 hover:bg-none" href='#projects'>Projects</a></li>
        <li><a className="hover:underline hover:underline-offset-4 hover:bg-none" href='#contact'>Contact</a></li>

    </>

    return (
        <>
            <div className=" bg-[#004966d3] z-30 text-[#F0F3BD] fixed top-0 left-0 right-0 ">
                <div className="max-w-6xl mx-auto ">
                    <div className="navbar px-3 md:px-6 lg:px-0">

                        <div className="navbar-start">
                            <a href="#" className=" text-2xl font-bold text-[#F0F3BD]">Ikmat</a>
                        </div>

                        {/* <div className="navbar-center hidden lg:flex">
                          
                        </div> */}

                        <div className="navbar-end">

                            <div className=" hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    {navOptions}
                                </ul>
                            </div>

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#004966] rounded-box w-52">
                                    {navOptions}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;
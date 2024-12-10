import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Banner = () => {

    const { theme } = useContext(AuthContext)

    return (
        <div className="relative">
            <img
                src="https://i.ibb.co/ZTBbWzT/banner-transformed.jpg"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-30 bg-gray-700 pt-10">
                <svg
                    className={`absolute inset-x-0 -bottom-1 text-white ${theme === 'dark' ? 'fill-black' : 'fill-white'}`}
                    viewBox="0 0 1160 163"
                >
                    <path
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-28 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="mb-6 text-5xl font-bold text-white leading-snug drop-shadow">
                                Unearth The Next Hidden Tech Gems with Nex<span className="text-yellow-400 text-6xl font-semibold">Tech</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                Dive into the ultimate tech treasure hunt at NexTech! Discover groundbreaking gadgets and must-have innovations with our exclusive reviews, comparisons, and unbeatable deals. Your next tech gem awaits!
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="font-semibold tracking-wider text-teal-accent-400 hover:text-teal-accent-700 flex items-center hover:text-yellow-400 gap-2 hover:gap-4 transition-all duration-500 text-white"
                            >
                                Learn more <span className="text-3xl font-bold pb-1">→</span>
                            </a>
                        </div>
                        <div className="w-full flex xl:px-8 xl:w-5/12">
                            <img src="https://i.ibb.co/8PSHLST/output-onlinegiftools.gif" alt="" className={`shadow-2xl ${theme === 'dark' ? 'shadow-black bg-black' : 'shadow-white bg-white'} justify-end rounded-t-full rounded-b-full`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
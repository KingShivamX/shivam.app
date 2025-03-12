import React from "react"
import { Link } from "react-router-dom"
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si"

const Hero = () => {
    return (
        <div className=" z-10 w-full h-fit flex flex-col justify-between items-start sm:flex-row sm:items-center gap-3">
            <div>
                <h1 className="font-bold text-[4.6vh] leading-10 pb-3">
                    Hi I&apos;m, Shivam Hippalgave
                </h1>
                <p className="text-[2vh] font-medium">
                    B.Tech CSE, SY Student at MIT Academy of Engineering, Pune
                </p>
            </div>
            <div className="flex flex-row gap-5 sm:gap-8 mt-4 sm:mt-0 text-[4vh] sm:text-[4.5vh]">
                <Link
                    to="https://codeforces.com/profile/kingshivam"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                    <SiCodeforces />
                </Link>
                <Link
                    to="https://www.codechef.com/users/kingshivam"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                    <SiCodechef />
                </Link>
                <Link
                    to="https://atcoder.jp/users/kingshivam"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out flex items-center"
                >
                    <img
                        src="/atcoderlogo.svg"
                        alt="AtCoder"
                        className="h-[44px] w-[44px] min-h-[44px] min-w-[44px] filter invert brightness-0 opacity-100 translate-y-[-5px]"
                    />
                </Link>
                <Link
                    to="https://leetcode.com/u/shivamhippalgave"
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                    <SiLeetcode />
                </Link>
            </div>
        </div>
    )
}

export default Hero

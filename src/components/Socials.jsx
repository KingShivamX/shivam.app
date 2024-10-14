import React from "react"
import { Link } from "react-router-dom"
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaBiohazard,
} from "react-icons/fa"

const Socials = () => {
    return (
        <div className="flex w-full h-fit flex-row justify-center gap-7 sm:gap-16 mt-12 sm:mt-10 text-[4vh] sm:text-[4.5vh]">
            <Link
                to="https://github.com/KingShivamX"
                className="hover:scale-110 transition-transform duration-300 ease-in-outt"
            >
                <FaGithub />
            </Link>
            <Link
                to="https://www.linkedin.com/in/shivamhippalgave"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
                <FaLinkedin />
            </Link>
            <Link
                to="https://x.com/KingShivamX"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
                <FaTwitter />
            </Link>
            <Link
                to="https://www.youtube.com/@KingShivamX/featured"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
                <FaYoutube />
            </Link>
            <Link
                to="https://www.instagram.com/sivazx"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
                <FaInstagram />
            </Link>
            <Link
                to="https://docs.google.com/document/d/1LQQC6ZRSkAdjhW2UJIPg3Y3_txBpEuKEz0AOEIPAJKI"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
                <FaBiohazard />
            </Link>
        </div>
    )
}

export default Socials

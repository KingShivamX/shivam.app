import React from "react"
import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <>
            <h1 className="font-bold text-[3.5vh] sm:text-[4vh] leading-10 mb-4 mt-7">
                Projects:
            </h1>
            <div className="h-full w-full flex flex-col gap-6 text-center text-[3.5vh] sm:text-[4vh] font-semibold">
                <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Link
                        className="underline underline-offset-2 custom-underline leading-3 pb-3"
                        to={"https://restnrelax.vercel.app/listing"}
                    >
                        Rest&Relax
                    </Link>{" "}
                    <p className="text-[2vh] font-medium">
                        Node.js, Express.js, MongoDB, Bootstrap, Mapbox SDK,
                        Passport.js, Cloudinary, Joi
                    </p>
                </div>
                <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Link
                        className="underline underline-offset-2 custom-underline leading-3 pb-3"
                        to={"https://closed-ai-gen.vercel.app/"}
                    >
                        ClosedAI
                    </Link>{" "}
                    <p className="text-[2vh] font-medium">
                        React.js, Node.js, Express.js, MongoDB, DALL-E API,
                        Cloudinary, Tailwind CSS
                    </p>
                </div>
                <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Link
                        className="underline underline-offset-2 custom-underline leading-3 pb-3"
                        to={"https://www.youtube.com/watch?v=Q8R45QDseDE"}
                    >
                        Energy Consumption Prediction
                    </Link>{" "}
                    <p className="text-[2vh] font-medium">
                        Flask, Pandas, NumPy, Matplotlib, Linear Regression,
                        HTML, Bootstrap
                    </p>
                </div>
                <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Link
                        className="underline underline-offset-2 custom-underline leading-3 pb-3"
                        to={
                            "https://kingshivamx.github.io/simongame/simon.html"
                        }
                    >
                        Simon Game
                    </Link>{" "}
                    <p className="text-[2vh] font-medium">
                        HTML, CSS, JavaScript
                    </p>
                </div>
                <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Link
                        className="underline underline-offset-2 custom-underline leading-3 pb-3"
                        to={"https://kingshivamx.github.io/blog.html"}
                    >
                        Blog Page
                    </Link>{" "}
                    <p className="text-[2vh] font-medium">HTML, CSS</p>
                </div>
                <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Link
                        className="underline underline-offset-2 custom-underline leading-3 pb-3"
                        to={"https://kingshivamx.github.io/spotify.html"}
                    >
                        Spotify Desktop Clone
                    </Link>{" "}
                    <p className="text-[2vh] font-medium">HTML, CSS</p>
                </div>
            </div>
        </>
    )
}

export default Projects

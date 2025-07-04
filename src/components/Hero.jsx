import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si"
import useIsMobile from "../hooks/useIsMobile"

const Hero = () => {
    const isMobile = useIsMobile()

    return (
        <motion.div
            className="z-10 w-full h-fit flex flex-col justify-between items-center sm:flex-row sm:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Name and Title Section */}
            <motion.div
                className="relative w-full sm:w-auto px-4 sm:px-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {/* Simplified Glassmorphism Background */}
                <motion.div
                    className="absolute -inset-2 sm:-inset-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                />

                {/* Content wrapper */}
                <div className="relative p-4 sm:p-6 text-center sm:text-left">
                    {/* Simplified Name */}
                    <motion.h1
                        className="font-bold text-[3.5vh] sm:text-[4.6vh] leading-8 sm:leading-10 pb-3 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Hi I'm,
                        <br />
                        <motion.span
                            className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-extrabold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            Shivam Hippalgave
                        </motion.span>
                    </motion.h1>

                    {/* Simplified subtitle */}
                    <motion.p
                        className="text-[1.4vh] sm:text-[1.8vh] lg:text-[2vh] font-medium text-gray-300 break-words leading-tight sm:leading-normal max-w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        B.Tech CSE, SY Student at MIT Academy of Engineering,
                        Pune
                    </motion.p>
                </div>
            </motion.div>

            {/* CP Profiles Section */}
            <motion.div
                className="w-full sm:w-auto flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Simplified Glassmorphism Container for Icons */}
                <motion.div
                    className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl w-full sm:w-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                >
                    <div className="flex flex-row gap-4 sm:gap-6 justify-center">
                        {[
                            {
                                Icon: SiCodeforces,
                                url: "https://codeforces.com/profile/kingshivam",
                                gradient: "from-blue-500 to-blue-700",
                                color: "text-blue-300",
                            },
                            {
                                Icon: SiCodechef,
                                url: "https://www.codechef.com/users/kingshivam",
                                gradient: "from-orange-500 to-yellow-600",
                                color: "text-orange-300",
                            },
                            {
                                Icon: null,
                                url: "https://atcoder.jp/users/kingshivam",
                                gradient: "from-green-500 to-teal-600",
                                color: "text-green-300",
                                isAtCoder: true,
                            },
                            {
                                Icon: SiLeetcode,
                                url: "https://leetcode.com/u/shivamhippalgave",
                                gradient: "from-yellow-500 to-orange-600",
                                color: "text-yellow-300",
                            },
                        ].map((platform, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.5 + index * 0.1,
                                }}
                                whileHover={
                                    !isMobile
                                        ? {
                                              scale: 1.1,
                                              y: -3,
                                              transition: { duration: 0.15 },
                                          }
                                        : {}
                                }
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={platform.url}
                                    className="group relative block"
                                >
                                    {/* Simplified glow effect */}
                                    <motion.div
                                        className={`absolute -inset-2 bg-gradient-to-r ${platform.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-200`}
                                    />

                                    <motion.div
                                        className={`relative flex items-center justify-center p-2 sm:p-3 rounded-xl bg-gradient-to-br ${platform.gradient}/10 border border-white/20 transition-all duration-200`}
                                        whileHover={{
                                            backgroundColor: `${platform.gradient}/20`,
                                            borderColor:
                                                "rgba(255, 255, 255, 0.3)",
                                        }}
                                    >
                                        {platform.isAtCoder ? (
                                            <img
                                                src="/atcoderlogo.svg"
                                                alt="AtCoder"
                                                className="h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] filter brightness-0 invert opacity-80 transition-all duration-200"
                                            />
                                        ) : (
                                            <platform.Icon
                                                className={`h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] ${platform.color} transition-all duration-200`}
                                            />
                                        )}
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Hero

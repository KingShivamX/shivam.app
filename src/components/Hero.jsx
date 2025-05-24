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
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
                {/* Enhanced Glassmorphism Background with better mobile margins */}
                <motion.div
                    className="absolute -inset-2 sm:-inset-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                />

                {/* Floating animation wrapper - Removed problematic floating */}
                <motion.div className="relative p-4 sm:p-6 text-center sm:text-left">
                    {/* Simplified Name - No more letter-by-letter animation */}
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
                            whileHover={{
                                scale: 1.05,
                                filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))",
                            }}
                        >
                            Shivam Hippalgave
                        </motion.span>
                    </motion.h1>

                    {/* Simplified subtitle - No more typewriter width animation */}
                    <motion.p
                        className="text-[1.4vh] sm:text-[1.8vh] lg:text-[2vh] font-medium text-gray-300 break-words leading-tight sm:leading-normal max-w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        whileHover={{ color: "#d1d5db" }}
                    >
                        B.Tech CSE, SY Student at MIT Academy of Engineering,
                        Pune
                    </motion.p>
                </motion.div>

                {/* Floating particles around name - Desktop only */}
                {!isMobile && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                                style={{
                                    left: `${10 + Math.random() * 80}%`,
                                    top: `${10 + Math.random() * 80}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 1,
                                    repeat: Infinity,
                                    delay: Math.random() * 1,
                                }}
                            />
                        ))}
                    </div>
                )}
            </motion.div>

            {/* CP Profiles Section */}
            <motion.div
                className="w-full sm:w-auto flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
                {/* Enhanced Glassmorphism Container for Icons */}
                <motion.div
                    className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl w-full sm:w-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                    animate-floating={{
                        y: [0, -8, 0],
                    }}
                    transition-floating={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
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
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.5 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                whileHover={
                                    !isMobile
                                        ? {
                                              scale: 1.2,
                                              rotate: 10,
                                              y: -5,
                                              transition: { duration: 0.15 },
                                          }
                                        : {}
                                }
                                whileTap={{ scale: 0.9 }}
                            >
                                <Link
                                    to={platform.url}
                                    className="group relative block"
                                >
                                    {/* Glow effect - Made instant */}
                                    <motion.div
                                        className={`absolute -inset-3 bg-gradient-to-r ${platform.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-100`}
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ duration: 0.1 }}
                                    />

                                    <motion.div
                                        className={`relative flex items-center justify-center p-2 sm:p-3 rounded-xl bg-gradient-to-br ${platform.gradient}/10 border border-white/20 transition-all duration-100`}
                                        whileHover={{
                                            backgroundColor: `${platform.gradient}/20`,
                                            borderColor:
                                                "rgba(255, 255, 255, 0.4)",
                                        }}
                                        transition={{ duration: 0.1 }}
                                    >
                                        {platform.isAtCoder ? (
                                            <motion.img
                                                src="/atcoderlogo.svg"
                                                alt="AtCoder"
                                                className="h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] filter brightness-0 invert opacity-80 drop-shadow-lg transition-all duration-100"
                                                whileHover={{
                                                    filter: "brightness-0 invert drop-shadow(0 0 20px rgba(255,255,255,0.8))",
                                                }}
                                                transition={{ duration: 0.1 }}
                                            />
                                        ) : (
                                            <motion.div
                                                whileHover={{
                                                    filter: "drop-shadow(0 0 20px currentColor)",
                                                }}
                                                transition={{ duration: 0.1 }}
                                            >
                                                <platform.Icon
                                                    className={`h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] ${platform.color} drop-shadow-lg transition-all duration-100`}
                                                />
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating particles around icons - Desktop only */}
                    {!isMobile && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        x: [0, 20, 0],
                                        y: [0, -30, 0],
                                        opacity: [0, 0.8, 0],
                                        scale: [0, 1.5, 0],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Hero

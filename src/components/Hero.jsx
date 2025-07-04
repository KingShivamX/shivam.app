import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si"
import useIsMobile from "../hooks/useIsMobile"

const Hero = () => {
    const isMobile = useIsMobile()

    const platforms = [
        {
            id: "codeforces",
            Icon: SiCodeforces,
            url: "https://codeforces.com/profile/kingshivam",
            color: "text-gray-300",
        },
        {
            id: "codechef",
            Icon: SiCodechef,
            url: "https://www.codechef.com/users/kingshivam",
            color: "text-gray-300",
        },
        {
            id: "atcoder",
            Icon: null,
            url: "https://atcoder.jp/users/kingshivam",
            color: "text-gray-300",
            isAtCoder: true,
        },
        {
            id: "leetcode",
            Icon: SiLeetcode,
            url: "https://leetcode.com/u/shivamhippalgave",
            color: "text-gray-300",
        },
    ]

    return (
        <motion.div
            className="z-10 w-full h-fit flex flex-col justify-between items-center lg:flex-row lg:items-center gap-8 lg:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Name and Title Section */}
            <motion.div
                className="relative w-full lg:w-auto px-4 lg:px-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {/* Professional Glassmorphism Background */}
                <motion.div
                    className="absolute -inset-2 lg:-inset-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={
                        !isMobile
                            ? {
                                  borderColor: "rgba(255, 255, 255, 0.2)",
                                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                              }
                            : undefined
                    }
                />

                {/* Content wrapper */}
                <div className="relative p-4 lg:p-6 text-center lg:text-left">
                    {/* Professional Name */}
                    <motion.h1
                        className="font-bold text-[3.5vh] lg:text-[4.6vh] leading-8 lg:leading-10 pb-3 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Hi I&apos;m,
                        <br />
                        <motion.span
                            className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent font-extrabold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={!isMobile ? { scale: 1.02 } : undefined}
                        >
                            Shivam Hippalgave
                        </motion.span>
                    </motion.h1>

                    {/* Professional subtitle */}
                    <motion.p
                        className="text-[1.4vh] lg:text-[2vh] font-medium text-gray-300 break-words leading-tight lg:leading-normal max-w-full"
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
                className="w-full lg:w-auto flex justify-center mt-4 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Professional Glassmorphism Container for Icons */}
                <motion.div
                    className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl w-full lg:w-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={
                        !isMobile
                            ? {
                                  borderColor: "rgba(255, 255, 255, 0.2)",
                                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                              }
                            : undefined
                    }
                >
                    <div className="flex flex-row gap-4 lg:gap-6 justify-center">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={platform.id}
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
                                        : undefined
                                }
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={platform.url}
                                    className="group relative block"
                                >
                                    {/* Professional glow effect */}
                                    <motion.div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-200" />

                                    <motion.div
                                        className="relative flex items-center justify-center p-2 lg:p-3 rounded-xl bg-white/10 border border-white/20 transition-all duration-200"
                                        whileHover={
                                            !isMobile
                                                ? {
                                                      backgroundColor:
                                                          "rgba(255, 255, 255, 0.15)",
                                                      borderColor:
                                                          "rgba(255, 255, 255, 0.3)",
                                                  }
                                                : undefined
                                        }
                                    >
                                        {platform.isAtCoder ? (
                                            <div className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] flex items-center justify-center">
                                                <img
                                                    src="/atcoderlogo.svg"
                                                    alt="AtCoder"
                                                    className="w-full h-full object-contain filter brightness-0 invert opacity-80 transition-all duration-200"
                                                />
                                            </div>
                                        ) : (
                                            <platform.Icon
                                                className={`w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] ${platform.color} transition-all duration-200`}
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

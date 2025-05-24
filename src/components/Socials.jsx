import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa"
import { FaIdCard } from "react-icons/fa"
import useIsMobile from "../hooks/useIsMobile"

const Socials = () => {
    const isMobile = useIsMobile()

    const socialLinks = [
        {
            Icon: FaGithub,
            url: "https://github.com/KingShivamX",
            gradient: "from-gray-600 to-gray-800",
            color: "text-gray-300",
        },
        {
            Icon: FaLinkedin,
            url: "https://www.linkedin.com/in/shivamhippalgave",
            gradient: "from-blue-500 to-blue-700",
            color: "text-blue-300",
        },
        {
            Icon: FaTwitter,
            url: "https://x.com/KingShivamX",
            gradient: "from-sky-500 to-blue-600",
            color: "text-sky-300",
        },
        {
            Icon: FaInstagram,
            url: "https://www.instagram.com/sivazx",
            gradient: "from-pink-500 to-red-500",
            color: "text-pink-300",
        },
        {
            Icon: FaYoutube,
            url: "https://www.youtube.com/@KingShivamX/featured",
            gradient: "from-red-500 to-red-600",
            color: "text-red-300",
        },
        {
            Icon: FaIdCard,
            url: "/Shivam_Hippalgave_Resume.pdf",
            gradient: "from-green-500 to-emerald-600",
            color: "text-green-300",
            isExternal: true,
        },
    ]

    return (
        <motion.div
            className="w-full flex justify-center mt-12 sm:mt-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {/* Enhanced Glassmorphism Container for Social Icons */}
            <motion.div
                className="relative p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl w-full sm:w-auto max-w-sm sm:max-w-md lg:max-w-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
            >
                {/* Desktop: Single row, Mobile/Tablet: 2 rows of 3 */}
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 lg:gap-6 justify-items-center">
                    {socialLinks.map((social, index) => (
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
                            {social.isExternal ? (
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative block"
                                >
                                    {/* Glow effect */}
                                    <motion.div
                                        className={`absolute -inset-3 bg-gradient-to-r ${social.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-100`}
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ duration: 0.1 }}
                                    />

                                    <motion.div
                                        className={`relative flex items-center justify-center p-2 sm:p-3 rounded-xl bg-gradient-to-br ${social.gradient}/10 border border-white/20 transition-all duration-100`}
                                        whileHover={{
                                            backgroundColor: `${social.gradient}/20`,
                                            borderColor:
                                                "rgba(255, 255, 255, 0.4)",
                                        }}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <motion.div
                                            whileHover={{
                                                filter: "drop-shadow(0 0 20px currentColor)",
                                            }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            <social.Icon
                                                className={`h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] ${social.color} drop-shadow-lg transition-all duration-100`}
                                            />
                                        </motion.div>
                                    </motion.div>
                                </a>
                            ) : (
                                <Link
                                    to={social.url}
                                    className="group relative block"
                                >
                                    {/* Glow effect */}
                                    <motion.div
                                        className={`absolute -inset-3 bg-gradient-to-r ${social.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-100`}
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ duration: 0.1 }}
                                    />

                                    <motion.div
                                        className={`relative flex items-center justify-center p-2 sm:p-3 rounded-xl bg-gradient-to-br ${social.gradient}/10 border border-white/20 transition-all duration-100`}
                                        whileHover={{
                                            backgroundColor: `${social.gradient}/20`,
                                            borderColor:
                                                "rgba(255, 255, 255, 0.4)",
                                        }}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <motion.div
                                            whileHover={{
                                                filter: "drop-shadow(0 0 20px currentColor)",
                                            }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            <social.Icon
                                                className={`h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] ${social.color} drop-shadow-lg transition-all duration-100`}
                                            />
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            )}
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
    )
}

export default Socials

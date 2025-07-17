import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaIdCard,
} from "react-icons/fa"
import useIsMobile from "../hooks/useIsMobile"

const socialLinks = [
    {
        id: "github",
        Icon: FaGithub,
        url: "https://github.com/KingShivamX",
        color: "text-gray-300",
    },
    {
        id: "linkedin",
        Icon: FaLinkedin,
        url: "https://www.linkedin.com/in/shivamhippalgave",
        color: "text-gray-300",
    },
    {
        id: "twitter",
        Icon: FaTwitter,
        url: "https://x.com/KingShivamX",
        color: "text-gray-300",
    },
    {
        id: "instagram",
        Icon: FaInstagram,
        url: "https://www.instagram.com/sivazx",
        color: "text-gray-300",
    },
    {
        id: "youtube",
        Icon: FaYoutube,
        url: "https://www.youtube.com/@KingShivamX/featured",
        color: "text-gray-300",
    },
    {
        id: "resume",
        Icon: FaIdCard,
        url: "https://drive.google.com/file/d/1i7iK_0CTLIHewl4zpQS2b6JKmfJ2_j02",
        color: "text-gray-300",
        isExternal: true,
    },
]

const Socials = () => {
    const isMobile = useIsMobile()

    return (
        <motion.div
            className="w-full flex justify-center mt-12 sm:mt-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {/* Professional Glassmorphism Container for Social Icons */}
            <motion.div
                className="relative p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl w-full sm:w-auto max-w-sm sm:max-w-md lg:max-w-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={
                    !isMobile
                        ? {
                              borderColor: "rgba(255, 255, 255, 0.2)",
                              backgroundColor: "rgba(255, 255, 255, 0.08)",
                          }
                        : undefined
                }
            >
                {/* Desktop: Single row, Mobile/Tablet: 2 rows of 3 */}
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 lg:gap-6 justify-items-center">
                    {socialLinks.map((social, index) => (
                        <motion.div
                            key={social.id}
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
                            {social.isExternal ? (
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative block"
                                >
                                    {/* Professional glow effect */}
                                    <motion.div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-200" />

                                    <motion.div
                                        className="relative flex items-center justify-center p-2 sm:p-3 rounded-xl bg-white/10 border border-white/20 transition-all duration-200"
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
                                        <social.Icon
                                            className={`h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] ${social.color} transition-all duration-200`}
                                        />
                                    </motion.div>
                                </a>
                            ) : (
                                <Link
                                    to={social.url}
                                    className="group relative block"
                                >
                                    {/* Professional glow effect */}
                                    <motion.div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-200" />

                                    <motion.div
                                        className="relative flex items-center justify-center p-2 sm:p-3 rounded-xl bg-white/10 border border-white/20 transition-all duration-200"
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
                                        <social.Icon
                                            className={`h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] ${social.color} transition-all duration-200`}
                                        />
                                    </motion.div>
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Socials

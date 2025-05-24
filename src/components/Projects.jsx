import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import PropTypes from "prop-types"
import useIsMobile from "../hooks/useIsMobile"

const Projects = () => {
    const isMobile = useIsMobile()

    const projectsData = [
        {
            title: "DataFlowAI",
            url: "https://dataflowai.shivam.app/",
            tech: "React.js, Chart.js, Framer-Motion, TailwindCSS, React Router",
            gradient: "from-blue-500 to-purple-600",
            accent: "blue",
        },
        {
            title: "Rest&Relax",
            url: "https://restnrelax.vercel.app/listing",
            tech: "Node.js, Express.js, MongoDB, Bootstrap, Mapbox SDK, Passport.js, Cloudinary, Joi",
            gradient: "from-green-500 to-teal-600",
            accent: "green",
        },
        {
            title: "ClosedAI",
            url: "https://closed-ai-gen.vercel.app/",
            tech: "React.js, Node.js, Express.js, MongoDB, DALL-E API, Cloudinary, Tailwind CSS",
            gradient: "from-purple-500 to-pink-600",
            accent: "purple",
        },
        {
            title: "Eco Connect",
            url: "https://eco-connect-mit.vercel.app/login",
            tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
            gradient: "from-green-500 to-teal-600",
            accent: "green",
        },
        {
            title: "Energy Consumption Prediction",
            url: "https://www.youtube.com/watch?v=Q8R45QDseDE",
            tech: "Flask, Pandas, NumPy, Matplotlib, Linear Regression, HTML, Bootstrap",
            gradient: "from-orange-500 to-red-600",
            accent: "orange",
        },
        {
            title: "Bharat Philately",
            url: "https://bharatphilately.vercel.app/",
            tech: "React.js, Tailwind CSS, Framer-Motion, React Router, Shadcn/ui",
            gradient: "from-blue-500 to-purple-600",
            accent: "blue",
        },
        {
            title: "Spotify Clone",
            url: "https://kingshivamx.github.io/spotify.html",
            tech: "HTML, CSS",
            gradient: "from-green-500 to-emerald-600",
            accent: "emerald",
        },
        {
            title: "Simon Game",
            url: "https://kingshivamx.github.io/simongame/simon.html",
            tech: "HTML, CSS, JavaScript",
            gradient: "from-cyan-500 to-blue-600",
            accent: "cyan",
        },
        {
            title: "Blog Page",
            url: "https://kingshivamx.github.io/blog.html",
            tech: "HTML, CSS",
            gradient: "from-indigo-500 to-purple-600",
            accent: "indigo",
        },
    ]

    const ProjectCard = ({ project, index, isMobile }) => {
        const cardRef = useRef(null)
        const x = useMotionValue(0)
        const y = useMotionValue(0)
        const rotateX = useTransform(y, [-100, 100], [30, -30])
        const rotateY = useTransform(x, [-100, 100], [-30, 30])

        return (
            <motion.div
                ref={cardRef}
                className="group relative h-full perspective-1000"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                }}
                onMouseMove={
                    !isMobile
                        ? (e) => {
                              const rect =
                                  cardRef.current?.getBoundingClientRect()
                              if (rect) {
                                  const centerX = rect.left + rect.width / 2
                                  const centerY = rect.top + rect.height / 2
                                  x.set(e.clientX - centerX)
                                  y.set(e.clientY - centerY)
                              }
                          }
                        : undefined
                }
                onMouseLeave={
                    !isMobile
                        ? () => {
                              x.set(0)
                              y.set(0)
                          }
                        : undefined
                }
                whileHover={
                    !isMobile ? { scale: 1.05, z: 50 } : { scale: 1.02 }
                }
                style={
                    !isMobile
                        ? {
                              rotateX: useSpring(rotateX, {
                                  stiffness: 300,
                                  damping: 30,
                              }),
                              rotateY: useSpring(rotateY, {
                                  stiffness: 300,
                                  damping: 30,
                              }),
                          }
                        : {}
                }
            >
                {/* Magnetic glow effect */}
                <motion.div
                    className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-300`}
                    whileHover={{ scale: 1.2, opacity: 0.4 }}
                />

                {/* Main Card with 3D effect - Made slightly smaller */}
                <motion.div
                    className="relative h-full p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                    whileHover={{
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Animated background pattern - Desktop only */}
                    {!isMobile ? (
                        <motion.div
                            className="absolute top-0 right-0 w-32 h-32 opacity-10"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <div
                                className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-full blur-3xl`}
                            />
                        </motion.div>
                    ) : (
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                            <div
                                className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-full blur-3xl`}
                            />
                        </div>
                    )}

                    {/* Floating particles - Desktop only */}
                    {!isMobile && (
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-2 h-2 bg-${project.accent}-400/30 rounded-full`}
                                    style={{
                                        left: `${20 + Math.random() * 60}%`,
                                        top: `${20 + Math.random() * 60}%`,
                                    }}
                                    animate={{
                                        y: [0, -30, 0],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0],
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

                    {/* Project Content */}
                    <div className="relative z-10 h-full flex flex-col">
                        {/* Project Title - No more letter by letter animation */}
                        <motion.h3
                            className="text-xl lg:text-2xl font-bold mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.1 + index * 0.05,
                                duration: 0.3,
                            }}
                        >
                            <Link
                                to={project.url}
                                className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:underline decoration-2 underline-offset-4 transition-all duration-200`}
                            >
                                {project.title}
                            </Link>
                        </motion.h3>

                        {/* Tech Stack - Simplified animation */}
                        <motion.div
                            className="flex-1 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2 + index * 0.05,
                                duration: 0.3,
                            }}
                        >
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {project.tech}
                            </p>
                        </motion.div>

                        {/* Enhanced Action Button - Made smaller */}
                        <motion.div
                            className="mt-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3 + index * 0.05,
                                duration: 0.3,
                            }}
                        >
                            <Link
                                to={project.url}
                                className="group/btn relative overflow-hidden"
                            >
                                <motion.div
                                    className={`relative inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-xl shadow-lg transition-all duration-200`}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 20px 40px rgba(0,0,0,0.3)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {/* Button background animation */}
                                    <motion.div
                                        className="absolute inset-0 bg-white/20 rounded-xl"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    <span className="relative z-10">
                                        View Project
                                    </span>
                                    <motion.svg
                                        className="relative z-10 ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        whileHover={{ x: 5, scale: 1.1 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </motion.svg>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Animated border */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                        style={{
                            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
                        }}
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            </motion.div>
        )
    }

    ProjectCard.propTypes = {
        project: PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            tech: PropTypes.string.isRequired,
            gradient: PropTypes.string.isRequired,
            accent: PropTypes.string.isRequired,
        }).isRequired,
        index: PropTypes.number.isRequired,
        isMobile: PropTypes.bool.isRequired,
    }

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Enhanced Section Title */}
            <motion.div
                className="text-center mb-12 lg:mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <motion.h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                    {["Featured", " ", "Projects"].map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, rotateX: -90 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            className={
                                index === 0
                                    ? "bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                                    : index === 2
                                    ? "bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                                    : ""
                            }
                            whileHover={{
                                scale: 1.05,
                                filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.8))",
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "6rem", opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                />

                {/* Floating title particles - Desktop only */}
                {!isMobile && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-purple-400/40 rounded-full"
                                style={{
                                    left: `${-100 + Math.random() * 200}px`,
                                    top: `${-50 + Math.random() * 100}px`,
                                }}
                                animate={{
                                    y: [0, -50, 0],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 1,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>
                )}
            </motion.div>

            {/* Enhanced Projects Grid - Made slightly smaller */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        isMobile={isMobile}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Projects

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
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
        return (
            <motion.div
                className="group relative h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                }}
                whileHover={
                    !isMobile ? { scale: 1.02, y: -5 } : { scale: 1.01 }
                }
            >
                {/* Simplified glow effect */}
                <motion.div
                    className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}
                />

                {/* Main Card */}
                <motion.div
                    className="relative h-full p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                    whileHover={{
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Simplified background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div
                            className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-full blur-3xl`}
                        />
                    </div>

                    {/* Project Content */}
                    <div className="relative z-10 h-full flex flex-col">
                        {/* Project Title */}
                        <motion.h3
                            className="text-xl lg:text-2xl font-bold mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
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

                        {/* Tech Stack */}
                        <motion.div
                            className="flex-1 mb-6"
                            initial={{ opacity: 0, y: 10 }}
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

                        {/* Action Button */}
                        <motion.div
                            className="mt-auto"
                            initial={{ opacity: 0, y: 10 }}
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
                                    <span className="relative z-10">
                                        View Project
                                    </span>
                                    <motion.svg
                                        className="relative z-10 ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        whileHover={{ x: 3 }}
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
            {/* Section Title */}
            <motion.div
                className="text-center mb-12 lg:mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <motion.h1
                    className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                        Featured{" "}
                    </span>
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                        Projects
                    </span>
                </motion.h1>

                <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "6rem", opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                />
            </motion.div>

            {/* Projects Grid */}
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

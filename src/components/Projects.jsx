import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { memo } from "react"
import PropTypes from "prop-types"
import useIsMobile from "../hooks/useIsMobile"

const projectsData = [
    {
        id: "dataflowai",
        title: "DataFlowAI",
        url: "https://dataflowai.shivam.app/",
        tech: "React.js, Chart.js, Framer-Motion, TailwindCSS, React Router",
    },
    {
        id: "nerds-on-call",
        title: "Nerds-on-Call",
        url: "https://nerds-on-call.vercel.app/",
        tech: "Next.js, Spring Boot, Radix UI, TailwindCSS, Razorpay, Socket.io, OpenAI API, TypeScript",
    },
    {
        id: "origami-cf",
        title: "Origami-CF",
        url: "https://origami-cf.vercel.app/",
        tech: "Next.js, MongoDB, JWT, Recharts, Shadcn/ui, TailwindCSS, Codeforces API, TypeScript, SWR",
    },
    {
        id: "rest-relax",
        title: "Rest&Relax",
        url: "https://restnrelax.vercel.app/listing",
        tech: "Node.js, Express.js, MongoDB, Bootstrap, Mapbox SDK, Passport.js, Cloudinary, Joi",
    },
    {
        id: "closedai",
        title: "ClosedAI",
        url: "https://closed-ai-gen.vercel.app/",
        tech: "React.js, Node.js, Express.js, MongoDB, DALL-E API, Cloudinary, Tailwind CSS",
    },
    {
        id: "energy-prediction",
        title: "Energy Consumption Prediction",
        url: "https://www.youtube.com/watch?v=Q8R45QDseDE",
        tech: "Flask, Pandas, NumPy, Matplotlib, Linear Regression, HTML, Bootstrap",
    },
    {
        id: "spotify-clone",
        title: "Spotify Clone",
        url: "https://kingshivamx.github.io/spotify.html",
        tech: "HTML, CSS",
    },
    {
        id: "simon-game",
        title: "Simon Game",
        url: "https://kingshivamx.github.io/simongame/simon.html",
        tech: "HTML, CSS, JavaScript",
    },
    {
        id: "blog-page",
        title: "Blog Page",
        url: "https://kingshivamx.github.io/blog.html",
        tech: "HTML, CSS",
    },
]

const ProjectCard = memo(({ project, index, isMobile }) => {
    return (
        <motion.div
            className="group relative h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
            }}
            whileHover={!isMobile ? { scale: 1.02, y: -5 } : undefined}
        >
            {/* Professional glow effect */}
            <motion.div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300" />

            {/* Main Card */}
            <motion.div
                className="relative h-full p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                whileHover={
                    !isMobile
                        ? {
                              borderColor: "rgba(255, 255, 255, 0.3)",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                          }
                        : undefined
                }
                transition={{ duration: 0.2 }}
            >
                {/* Professional background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full blur-3xl" />
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
                            className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent hover:underline decoration-2 underline-offset-4 transition-all duration-200"
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
                                className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-500 text-white text-sm font-medium rounded-xl shadow-lg transition-all duration-200"
                                whileHover={
                                    !isMobile
                                        ? {
                                              scale: 1.05,
                                              boxShadow:
                                                  "0 20px 40px rgba(0,0,0,0.3)",
                                          }
                                        : undefined
                                }
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
                                    whileHover={
                                        !isMobile ? { x: 3 } : undefined
                                    }
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
})

ProjectCard.displayName = "ProjectCard"

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tech: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    isMobile: PropTypes.bool.isRequired,
}

const Projects = () => {
    const isMobile = useIsMobile()

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Professional Section Title */}
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
                    <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                        Featured{" "}
                    </span>
                    <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                        Projects
                    </span>
                </motion.h1>

                <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-amber-500 mx-auto rounded-full"
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
                        key={project.id}
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

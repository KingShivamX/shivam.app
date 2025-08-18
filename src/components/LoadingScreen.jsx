import { motion } from "framer-motion"
import { useMemo } from "react"
import PropTypes from "prop-types"
import useIsMobile from "../hooks/useIsMobile"

const LoadingScreen = ({ progress, isComplete = false }) => {
    const isMobile = useIsMobile()

    // Memoize particle positions for better performance
    const particles = useMemo(
        () =>
            Array.from({ length: 3 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
            })),
        []
    )

    const loadingDots = useMemo(
        () => Array.from({ length: 3 }, (_, i) => ({ id: i })),
        []
    )

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Professional background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

            {/* Minimal floating particles - desktop only */}
            {!isMobile && (
                <div className="absolute inset-0 pointer-events-none">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0, 0.4, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: particle.id * 0.5,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Main content container */}
            <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Professional name styling */}
                <motion.div className="mb-8">
                    <motion.h1
                        className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        SHIVAM
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Loading portfolio...
                    </motion.p>
                </motion.div>

                {/* Professional progress bar */}
                <motion.div
                    className="relative w-64 mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Progress bar background */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                        {/* Progress fill - professional yellow */}
                        <motion.div
                            className="h-full bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Progress percentage */}
                    <motion.div className="mt-4 text-center">
                        <span className="text-xl font-bold text-yellow-400">
                            {Math.round(progress)}%
                        </span>
                    </motion.div>
                </motion.div>

                {/* Professional loading dots */}
                <motion.div
                    className="flex justify-center space-x-2 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {loadingDots.map((dot) => (
                        <motion.div
                            key={dot.id}
                            className="w-2 h-2 bg-yellow-500 rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: dot.id * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

LoadingScreen.propTypes = {
    progress: PropTypes.number.isRequired,
    isComplete: PropTypes.bool,
}

export default LoadingScreen

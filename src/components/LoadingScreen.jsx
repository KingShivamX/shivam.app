import { motion } from "framer-motion"
import PropTypes from "prop-types"

const LoadingScreen = ({ progress, isComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {/* Simplified background - removed heavy animated grid */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

            {/* Reduced floating particles from 20 to 5 */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Main content container - simplified */}
            <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Simplified name animation - removed complex 3D effects */}
                <motion.div className="mb-8">
                    <motion.h1
                        className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
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
                        Loading amazing experiences...
                    </motion.p>
                </motion.div>

                {/* Simplified progress bar */}
                <motion.div
                    className="relative w-64 mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Progress bar background */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                        {/* Progress fill - simplified */}
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Progress percentage */}
                    <motion.div className="mt-4 text-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            {Math.round(progress)}%
                        </span>
                    </motion.div>
                </motion.div>

                {/* Simplified loading dots */}
                <motion.div
                    className="flex justify-center space-x-2 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.2,
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

LoadingScreen.defaultProps = {
    isComplete: false,
}

export default LoadingScreen

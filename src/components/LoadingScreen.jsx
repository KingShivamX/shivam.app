import { motion } from "framer-motion"
import PropTypes from "prop-types"

const LoadingScreen = ({ progress, isComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px",
                    }}
                    animate={{
                        x: [0, 50],
                        y: [0, 50],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 40 - 20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                        }}
                    />
                ))}
            </div>

            {/* Main content container */}
            <motion.div
                className="relative z-10 text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
            >
                {/* Enhanced name animation with 3D effect */}
                <motion.div className="mb-12">
                    <motion.h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4">
                        {"SHIVAM".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                    rotateX: -90,
                                    scale: 0.5,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    rotateX: 0,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: "backOut",
                                }}
                                whileHover={{
                                    scale: 1.2,
                                    color: "#60a5fa",
                                    textShadow:
                                        "0 0 30px rgba(96, 165, 250, 0.8)",
                                    rotateY: 10,
                                }}
                                className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="text-xl sm:text-2xl text-gray-400 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2 }}
                    >
                        Loading amazing experiences...
                    </motion.p>
                </motion.div>

                {/* Enhanced progress bar with glow effects */}
                <motion.div
                    className="relative w-80 sm:w-96 mx-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                >
                    {/* Progress bar background with glow */}
                    <motion.div
                        className="relative h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700"
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Animated background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                            animate={{
                                x: ["-100%", "100%"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* Progress fill with multiple layers */}
                        <motion.div
                            className="absolute inset-0 rounded-full overflow-hidden"
                            style={{
                                background:
                                    "linear-gradient(90deg, #3b82f6, #8b5cf6, #06d6a0)",
                                backgroundSize: "200% 100%",
                            }}
                            animate={{
                                backgroundPosition: [
                                    "0% 0%",
                                    "100% 0%",
                                    "0% 0%",
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: false }}
                        />

                        {/* Glow effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background:
                                    "linear-gradient(90deg, #3b82f6, #8b5cf6, #06d6a0)",
                                filter: "blur(8px)",
                                opacity: 0.6,
                            }}
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: false }}
                        />
                    </motion.div>

                    {/* Progress percentage with floating animation */}
                    <motion.div
                        className="mt-6 text-center"
                        animate={{
                            y: [0, -5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.span
                            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
                            key={progress}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {Math.round(progress)}%
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* Loading dots with enhanced animation */}
                <motion.div
                    className="flex justify-center space-x-2 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </motion.div>

                {/* Completion celebration effect */}
                {progress >= 100 && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                }}
                                initial={{ scale: 0, x: 0, y: 0 }}
                                animate={{
                                    scale: [0, 1, 0],
                                    x: (Math.random() - 0.5) * 800,
                                    y: (Math.random() - 0.5) * 800,
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: Math.random() * 0.5,
                                    ease: "easeOut",
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </motion.div>

            {/* Corner decorative elements */}
            <motion.div
                className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-500/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            />
            <motion.div
                className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-500/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            />
            <motion.div
                className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-green-500/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
            />
            <motion.div
                className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-pink-500/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
            />
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

import React from "react"
import { motion } from "framer-motion"

const BgBehind = () => {
    return (
        <motion.div
            className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

            {/* Subtle animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-purple-900/5 to-cyan-900/10"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    )
}

export default BgBehind

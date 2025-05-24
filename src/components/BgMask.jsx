import React from "react"
import { motion } from "framer-motion"

const BgMask = () => {
    return (
        <motion.div
            className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
        >
            {/* Main overlay with better gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />

            {/* Additional depth layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
        </motion.div>
    )
}

export default BgMask

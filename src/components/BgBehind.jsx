import { motion } from "framer-motion"
import useIsMobile from "../hooks/useIsMobile"

const BgBehind = () => {
    const isMobile = useIsMobile()

    return (
        <motion.div
            className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isMobile ? 0.5 : 1 }}
        >
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

            {/* Static gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-purple-900/5 to-cyan-900/10 opacity-40" />
        </motion.div>
    )
}

export default BgBehind

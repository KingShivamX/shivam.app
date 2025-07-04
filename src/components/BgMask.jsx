import { motion } from "framer-motion"
import useIsMobile from "../hooks/useIsMobile"

const BgMask = () => {
    const isMobile = useIsMobile()

    return (
        <motion.div
            className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isMobile ? 0.5 : 1 }}
        >
            {/* Professional overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />

            {/* Subtle depth layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
    )
}

export default BgMask

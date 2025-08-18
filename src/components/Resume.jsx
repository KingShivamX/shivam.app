import { motion } from "framer-motion"
import { useState } from "react"
import useIsMobile from "../hooks/useIsMobile"

const Resume = () => {
    const [isLoading, setIsLoading] = useState(true)
    const isMobile = useIsMobile()

    const handleLoad = () => {
        setIsLoading(false)
    }

    return (
        <motion.div
            className="fixed inset-0 w-screen h-screen overflow-hidden bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 9999 }}
        >
            {/* Loading indicator */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <div className="text-gray-600 text-lg mb-4">
                        Loading resume...
                    </div>
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
            )}

            {/* Full Screen PDF Viewer */}
            <iframe
                src="/Shivam_Hippalgave_Resume.pdf#zoom=FitH&scrollbar=0&toolbar=0&navpanes=0"
                className="w-full h-full border-0 block"
                title="Shivam Hippalgave Resume"
                onLoad={handleLoad}
                style={{
                    width: "100vw",
                    height: "100vh",
                    border: "none",
                    margin: 0,
                    padding: 0,
                    transform: isMobile ? "scale(1.1)" : "scale(1)",
                    transformOrigin: "top left",
                }}
            />
        </motion.div>
    )
}

export default Resume

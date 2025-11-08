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

            {/* PDF Viewer */}
            <iframe
                src="/color-resume-shivam-hippalgave.pdf#view=Fit&toolbar=1&navpanes=0&scrollbar=1"
                className="w-full h-full border-0"
                title="Shivam Hippalgave Resume"
                onLoad={handleLoad}
                frameBorder="0"
                allowFullScreen={true}
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    margin: 0,
                    padding: 0,
                }}
            />
        </motion.div>
    )
}

export default Resume

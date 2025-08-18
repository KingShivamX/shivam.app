import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FaDownload, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import useIsMobile from "../hooks/useIsMobile"

const Resume = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [pdfError, setPdfError] = useState(false)
    const isMobile = useIsMobile()

    const handleLoad = () => {
        setIsLoading(false)
        setPdfError(false)
    }

    const handleError = () => {
        setIsLoading(false)
        setPdfError(true)
    }

    // Set a timeout for loading to prevent infinite white screen
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isLoading) {
                setIsLoading(false)
                setPdfError(true)
            }
        }, 5000) // 5 second timeout

        return () => clearTimeout(timeout)
    }, [isLoading])

    return (
        <motion.div
            className="fixed inset-0 w-screen h-screen overflow-hidden bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 9999 }}
        >
            {/* Loading indicator */}
            {isLoading && !pdfError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <div className="text-gray-600 text-lg mb-4">
                        Loading resume...
                    </div>
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
            )}

            {/* Error/Fallback screen */}
            {pdfError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-6">
                    <div className="text-center max-w-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Resume
                        </h2>
                        <p className="text-gray-600 mb-6">
                            {isMobile
                                ? "PDF viewer may not be supported on your device. Please download the resume instead."
                                : "Unable to load PDF viewer. Please download the resume instead."}
                        </p>

                        <div className="space-y-4">
                            <a
                                href="/Shivam_Hippalgave_Resume.pdf"
                                download="Shivam_Hippalgave_Resume.pdf"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <FaDownload className="w-4 h-4" />
                                Download Resume
                            </a>

                            <br />

                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                            >
                                <FaArrowLeft className="w-4 h-4" />
                                Back to Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Full Screen PDF Viewer */}
            {!pdfError && (
                <iframe
                    src="/Shivam_Hippalgave_Resume.pdf#zoom=FitH&scrollbar=0&toolbar=1&navpanes=0"
                    className="w-full h-full border-0 block"
                    title="Shivam Hippalgave Resume"
                    onLoad={handleLoad}
                    onError={handleError}
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
            )}

            {/* Mobile: Quick download button overlay */}
            {!isLoading && !pdfError && isMobile && (
                <div className="absolute top-4 right-4 z-20">
                    <a
                        href="/Shivam_Hippalgave_Resume.pdf"
                        download="Shivam_Hippalgave_Resume.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/90 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                    >
                        <FaDownload className="w-3 h-3" />
                        Download
                    </a>
                </div>
            )}

            {/* Mobile: Back button overlay */}
            {!isLoading && !pdfError && (
                <div className="absolute top-4 left-4 z-20">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600/90 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-lg"
                    >
                        <FaArrowLeft className="w-3 h-3" />
                        {isMobile ? "" : "Back"}
                    </Link>
                </div>
            )}
        </motion.div>
    )
}

export default Resume

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Hero,
    Projects,
    Background,
    BgMask,
    BgBehind,
    Socials,
} from "./components"
import LoadingScreen from "./components/LoadingScreen"
import useIsMobile from "./hooks/useIsMobile"

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const isMobile = useIsMobile()

    useEffect(() => {
        // Simplified loading - just wait for video or timeout
        const loadingTimer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // Maximum 2 seconds loading

        return () => clearTimeout(loadingTimer)
    }, [])

    const handleVideoLoaded = () => {
        setLoadingProgress(100)
        setTimeout(() => {
            setIsLoading(false)
        }, 300) // Shorter delay
    }

    useEffect(() => {
        // Simulate progress
        if (isLoading) {
            const interval = setInterval(() => {
                setLoadingProgress((prev) => {
                    if (prev >= 90) return prev
                    return prev + 20
                })
            }, 200)
            return () => clearInterval(interval)
        }
    }, [isLoading])

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loading" progress={loadingProgress} />
                )}
            </AnimatePresence>

            {/* Main App Content */}
            <motion.div
                className="relative min-h-screen w-screen text-white overflow-x-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                style={{ display: isLoading ? "none" : "block" }}
            >
                {/* Background Layers */}
                <BgBehind />
                <Background onVideoLoaded={handleVideoLoaded} />
                <BgMask />

                {/* Main Content Container with improved spacing */}
                <div className="relative z-10 min-h-screen max-w-screen mx-auto">
                    {/* Header Section */}
                    <header className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                        <div className="max-w-7xl mx-auto">
                            <Hero />
                        </div>
                    </header>

                    {/* Main Content with better spacing */}
                    <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                        <div className="max-w-7xl mx-auto">
                            <Projects />
                        </div>
                    </main>

                    {/* Footer Section */}
                    <footer className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                        <div className="max-w-7xl mx-auto">
                            <Socials />
                        </div>
                    </footer>
                </div>

                {/* Floating elements - disabled on mobile for performance */}
                {!isMobile && (
                    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/10 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -40],
                                    opacity: [0, 0.3, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    delay: Math.random() * 4,
                                    ease: "linear",
                                }}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
        </>
    )
}

export default App

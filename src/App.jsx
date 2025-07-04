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
        }, 1500) // Reduced from 2000ms to 1500ms

        return () => clearTimeout(loadingTimer)
    }, [])

    const handleVideoLoaded = () => {
        setLoadingProgress(100)
        setTimeout(() => {
            setIsLoading(false)
        }, 200) // Reduced from 300ms to 200ms
    }

    useEffect(() => {
        // Simplified progress simulation
        if (isLoading) {
            const interval = setInterval(() => {
                setLoadingProgress((prev) => {
                    if (prev >= 90) return prev
                    return prev + 25 // Faster progress increments
                })
            }, 150) // Faster updates
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
                transition={{ duration: 0.4 }}
                style={{ display: isLoading ? "none" : "block" }}
            >
                {/* Background Layers */}
                <BgBehind />
                <Background onVideoLoaded={handleVideoLoaded} />
                <BgMask />

                {/* Main Content Container */}
                <div className="relative z-10 min-h-screen max-w-screen mx-auto">
                    {/* Header Section */}
                    <header className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                        <div className="max-w-7xl mx-auto">
                            <Hero />
                        </div>
                    </header>

                    {/* Main Content */}
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
            </motion.div>
        </>
    )
}

export default App

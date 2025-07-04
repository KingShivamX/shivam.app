import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Hero,
    Projects,
    Background,
    BgMask,
    BgBehind,
    Socials,
    LoadingScreen,
} from "./components"
import useIsMobile from "./hooks/useIsMobile"

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const isMobile = useIsMobile()

    // Memoize the video loaded handler for better performance
    const handleVideoLoaded = useCallback(() => {
        setLoadingProgress(100)
        setTimeout(
            () => {
                setIsLoading(false)
            },
            isMobile ? 100 : 200
        )
    }, [isMobile])

    useEffect(() => {
        // Faster loading for mobile
        const loadingTimer = setTimeout(
            () => {
                setIsLoading(false)
            },
            isMobile ? 1000 : 1500
        )

        return () => clearTimeout(loadingTimer)
    }, [isMobile])

    useEffect(() => {
        // Faster progress simulation
        if (isLoading) {
            const interval = setInterval(
                () => {
                    setLoadingProgress((prev) => {
                        if (prev >= 90) return prev
                        return prev + (isMobile ? 30 : 25)
                    })
                },
                isMobile ? 100 : 150
            )
            return () => clearInterval(interval)
        }
    }, [isLoading, isMobile])

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
                transition={{ duration: isMobile ? 0.2 : 0.4 }}
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

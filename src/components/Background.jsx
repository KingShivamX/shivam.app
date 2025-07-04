import { useRef, useEffect } from "react"
import useIsMobile from "../hooks/useIsMobile"

const Background = ({ onVideoLoaded }) => {
    const videoRef = useRef(null)
    const isMobile = useIsMobile()

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleCanPlay = () => {
            onVideoLoaded?.()
        }

        // Simple event listeners
        video.addEventListener("canplay", handleCanPlay)

        // Force video to play
        video.play().catch(console.error)

        return () => {
            video.removeEventListener("canplay", handleCanPlay)
        }
    }, [onVideoLoaded])

    return (
        <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-30">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload={isMobile ? "none" : "metadata"}
            >
                <source src="./shivamapp.webm" type="video/webm" />
                <source src="./shivamapp.mp4" type="video/mp4" />
            </video>

            {/* Simplified overlay */}
            <div className="absolute inset-0 bg-black/40" />
        </div>
    )
}

export default Background

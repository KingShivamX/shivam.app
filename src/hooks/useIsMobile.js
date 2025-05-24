import { useState, useEffect } from "react"

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIsMobile = () => {
            // Check both screen size and user agent
            const isMobileScreen = window.innerWidth <= 768
            const isMobileUserAgent =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            const isTouchDevice =
                "ontouchstart" in window || navigator.maxTouchPoints > 0

            setIsMobile(isMobileScreen || isMobileUserAgent || isTouchDevice)
        }

        // Check on mount
        checkIsMobile()

        // Check on resize
        window.addEventListener("resize", checkIsMobile)

        return () => window.removeEventListener("resize", checkIsMobile)
    }, [])

    return isMobile
}

export default useIsMobile

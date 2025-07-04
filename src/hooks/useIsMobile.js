import { useState, useEffect, useCallback } from "react"

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    const checkIsMobile = useCallback(() => {
        // Check both screen size and user agent
        const isMobileScreen = window.innerWidth <= 768
        const isMobileUserAgent =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        const isTouchDevice =
            "ontouchstart" in window || navigator.maxTouchPoints > 0

        setIsMobile(isMobileScreen || isMobileUserAgent || isTouchDevice)
    }, [])

    useEffect(() => {
        // Check on mount
        checkIsMobile()

        // Debounced resize handler for better performance
        let timeoutId
        const debouncedCheckIsMobile = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(checkIsMobile, 150)
        }

        // Check on resize
        window.addEventListener("resize", debouncedCheckIsMobile)

        return () => {
            window.removeEventListener("resize", debouncedCheckIsMobile)
            clearTimeout(timeoutId)
        }
    }, [checkIsMobile])

    return isMobile
}

export default useIsMobile

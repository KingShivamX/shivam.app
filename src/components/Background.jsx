import React from "react"

const Background = () => {
    return (
        <div className="absolute top-0 left-0 h-screen w-screen overflow-hidden -z-30">
            <video className="w-full h-full object-cover" autoPlay muted loop>
                <source src="./shivamapp.webm" type="video/webm" />
            </video>
        </div>
    )
}

export default Background

import {
    Hero,
    Projects,
    Background,
    BgMask,
    BgBehind,
    Socials,
} from "./components"

const App = () => {
    return (
        <div className="relative min-h-screen w-screen px-8 py-8 text-white overflow-x-hidden">
            <BgMask />
            <Background />
            <BgBehind />

            <Hero />
            <Projects />
            <Socials />
        </div>
    )
}

export default App

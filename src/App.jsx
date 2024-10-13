import { Hero, Extras, Projects, Background, BgMask } from "./components"
import Socials from "./components/Socials"

const App = () => {
    return (
        <div className="relative min-h-screen w-screen px-8 py-4 text-white">
            <Hero />
            {/* <Extras />
            <Projects />
            <Socials /> */}

            <BgMask />
            <Background />
        </div>
    )
}

export default App

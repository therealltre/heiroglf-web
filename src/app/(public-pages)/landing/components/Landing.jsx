'use client'

import HeroContent from './HeroContent'
import NavigationBar from './NavigationBar'
// import Features from './Features'
// import Demos from './Demos'
// import TechStack from './About'
// import OtherFeatures from './OtherFeatures'
// import Components from './Components'
import LandingFooter from './LandingFooter'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK, MODE_LIGHT } from '@/constants/theme.constant'
import Discover from './Discover'
import { useEffect, useRef } from 'react'
import AboutSection from './About'

const Landing = () => {
    const mode = useTheme((state) => state.mode)
    const setMode = useTheme((state) => state.setMode)
    const schema = useTheme((state) => state.themeSchema)
    const setSchema = useTheme((state) => state.setSchema)

    const toggleMode = () => {
        setMode(mode === MODE_LIGHT ? MODE_DARK : MODE_LIGHT)
    }

    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3 // Slows it to 50% speed
        }
    }, [])

    return (
        <main className="px-4 lg:px-0 text-base bg-white dark:bg-gray-900">
            <NavigationBar toggleMode={toggleMode} mode={mode} />
            <div className="relative">
                <div
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='50' height='50' fill='none' stroke='${mode === MODE_LIGHT ? 'rgb(0 0 0 / 0.04)' : 'rgb(255 255 255 / 0.04)'}'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                    }}
                    className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_5%,transparent_70%)] pointer-events-none select-none"
                >
                    < video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        // className="absolute inset-0 w-full h-full object-cover  z-0"
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-80 z-0"
                    >
                        <source src="/video/landing/file.mp4" type="video/mp4" />
                        {/* <source src="/video/landing/crypto-hero-bg.mp4" type="video/mp4" /> */}
                    </video >
                    <div className="absolute inset-0 bg-amber-900/95 mix-blend-hue" />
                </div>
                <HeroContent mode={mode} />
            </div>
            <AboutSection />
            <Discover
                mode={mode}
                schema={schema}
                setSchema={setSchema}
                onModeChange={(value) => setMode(value ? 'dark' : 'light')}
            />
            {/* <Features
                mode={mode}
                schema={schema}
                setSchema={setSchema}
                onModeChange={(value) => setMode(value ? 'dark' : 'light')}
            /> */}
            {/* <Demos mode={mode} /> */}

            {/* <OtherFeatures /> */}
            {/* <Components /> */}
            <LandingFooter mode={mode} />
        </main>
    )
}

export default Landing

'use client'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import TextGenerateEffect from './TextGenerateEffect'
import { MODE_DARK, MODE_LIGHT } from '@/constants/theme.constant'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const HeroContent = ({ mode }) => {
    const router = useRouter()

    const handleJoinWaitlist = () => {
        const footer = document.getElementById('footer')
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' })
        }
    }

    // const handlePreview = () => {
    //     router.push('/dashboards/crypto')
    // }

    // const handleGetStarted = () => {
    //     router.push('/sign-up')
    // }

    return (
        // <div className="relative min-h-screen overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 flex min-h-[100vh] flex-col items-center justify-center">
            <div className="flex flex-col relative overflow-hidden">
                <div>
                    <TextGenerateEffect
                        wordClassName="text-2xl md:text-4xl lg:text-7xl font-bold max-w-4xl mx-auto text-center mt-6 relative z-10"
                        words="Be the First to Join Africa’s New Crypto Era"
                        wordsCallbackClass={({ word }) => {
                            if (word === 'Crypto') {
                                return 'bg-gradient-to-r from-[#B1743C] to-[#B1743C]/40 bg-clip-text text-transparent'
                            }
                            if (word === 'Era') {
                                return 'bg-gradient-to-r from-[#B1743C]/40 to-[#B1743C] bg-clip-text text-transparent'
                            }
                            return ''
                        }}
                    />
                    <motion.p
                        initial={{ opacity: 0, translateY: 40 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="text-center mt-6 text-base md:text-xl text-black dark:text-white max-w-4xl mx-auto relative z-10 font-normal"
                    >
                        HIEROGLF is building a secure and user-friendly cryptocurrency exchange tailored for Africa. Sign up today and get early access when we launch.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, translateY: 40 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        className="flex items-center gap-4 justify-center mt-10 relative z-10"
                    >
                        <Button variant="solid"
                            onClick={handleJoinWaitlist}
                            className=" bg-[#B1743C] text-white hover:bg-[#B1743C]/80">
                            Join the Waitlist
                        </Button>
                        {/* <Button onClick={handlePreview}>Live Demo</Button> */}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex justify-center mt-8 gap-4"
                    >
                        <div className="flex items-center">
                            <div className="flex -space-x-2">
                                {['BTC', 'ETH', 'XRP', 'USDT'].map(
                                    (coin, index) => (
                                        <div
                                            key={index}
                                            className="w-10 h-10 rounded-full bg-[gray]-100 dark:bg-[#B1743C] border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs dark:text-white font-bold"
                                        >
                                            {coin}
                                        </div>
                                    ),
                                )}
                            </div>
                            <span className="ml-3 text-sm text-black dark:text-white">
                                assets supported
                            </span>
                            {/* <span className="ml-3 text-sm text-black dark:text-white">
                                1000+ assets supported
                            </span> */}
                        </div>
                    </motion.div>
                </div>

                {/* <div className="p-2 lg:p-4 border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 rounded-2xl lg:rounded-[32px] mt-20 relative">
                    <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-gray-900 dark:to-gray-900 scale-[1.1] pointer-events-none" />
                    <div className="bg-white dark:bg-gray-900 dark:border-gray-700 border border-gray-200 rounded-[24px] overflow-hidden shadow-xl">
                        {mode === MODE_LIGHT && (
                            <Image
                                className="rounded-2xl lg:rounded-[24px]"
                                src="/img/landing/crypto-dashboard-light.jpg"
                                width={1920}
                                height={600}
                                alt="Crypto Dashboard"
                                priority
                            />
                        )}
                        {mode === MODE_DARK && (
                            <Image
                                className="rounded-2xl lg:rounded-[24px]"
                                src="/img/landing/crypto-dashboard-light.jpg"
                                width={1920}
                                height={600}
                                alt="Crypto Dashboard"
                                priority
                            />
                        )}
                    </div>

                </div> */}
            </div>
        </div>
        // </div>
    )
}

export default HeroContent

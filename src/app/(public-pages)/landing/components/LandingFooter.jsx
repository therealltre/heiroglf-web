'use client'
import Container from './LandingContainer'
import Button from '@/components/ui/Button'
import AuroraBackground from './AuroraBackground'
import { motion } from 'framer-motion'
import { MODE_DARK, MODE_LIGHT } from '@/constants/theme.constant'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LandingFooter = ({ mode }) => {
    const year = new Date().getFullYear()
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        setIsSubmitting(true)
    }


    return (
        <div>
            <div id="footer" className="relative z-20 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-gray-900/50">
                <Container className="relative ">
                    <div className="py-10 md:py-40">
                        <AuroraBackground
                            className="rounded-3xl bg-gradient-to-br from-transparent to-transparent dark:from-transparent dark:to-transparent"
                            auroraClassName="rounded-3xl"
                        >
                            <motion.div
                                initial={{ opacity: 0.0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                                className="relative flex flex-col gap-4 items-center justify-center py-20 px-8 text-center"
                            >
                                <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-[#fff] dark:from-blue-400 dark:to-purple-400">
                                    Why Join the Waitlist?
                                </h2>

                                <div className="mt-6 max-w-[1000px] mx-auto grid gap-6 md:grid-cols-3">
                                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:shadow-lg transition-all">
                                        <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-max mx-auto">
                                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Exclusive Early Access</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Be among the first to experience the future of finance.</p>
                                    </div>

                                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:shadow-lg transition-all">
                                        <div className="mb-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full w-max mx-auto">
                                            <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Founding Community Perks</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Rewards and benefits for early supporters.</p>
                                    </div>

                                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:shadow-lg transition-all">
                                        <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-max mx-auto">
                                            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Get updates on launch dates, new features, and educational content.</p>
                                    </div>
                                </div>

                                <div className="mt-10 w-full max-w-md mx-auto">
                                    <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                                        Don’t miss out on the financial revolution.<br />
                                        <span className="font-normal">Sign up today and be part of the HEIROGLF community.</span>
                                    </p>
                                    <form
                                        action="https://api.web3forms.com/submit"
                                        method="POST"
                                        className="flex flex-col md:flex-row items-center gap-4 bg-white/20 dark:bg-black/30 p-4 rounded-xl backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg"
                                    >
                                        {/* Replace with your own Web3Forms Access Key */}
                                        <input type="hidden" name="access_key" value="13c5a260-67d9-4e2f-aac9-fa40fe48f177" />
                                        <input type="hidden" name="subject" value="New Waitlist Subscriber" />
                                        <input type="hidden" name="from_name" value="HEIROGLF Waitlist" />

                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Enter your email"
                                            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B1743C]"
                                        />

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`px-6 py-2 font-medium rounded-lg transition-colors ${isSubmitting
                                                ? 'bg-[#B1743C]/50 cursor-not-allowed'
                                                : 'bg-[#B1743C] hover:bg-[#B1743C]/90'
                                                } text-white flex items-center gap-2`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg
                                                        className="animate-spin h-4 w-4 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                                                        ></path>
                                                    </svg>
                                                    Submitting...
                                                </>
                                            ) : (
                                                'Join Waitlist'
                                            )}
                                        </button>
                                    </form>
                                </div>

                            </motion.div>
                        </AuroraBackground>
                    </div>

                </Container>
            </div>


            {/* footer section  */}
            <div className="bg-[#B1743C]">
                <Container>
                    <div className="py-6 border-t border-gray-200 dark:border-gray-800  mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 ">
                            <Link href="/" className="flex items-center gap-2">
                                {mode === MODE_LIGHT && (
                                    <img
                                        src="/img/logo/logo-light-full1.png"
                                        width={50}
                                        height={50}
                                        alt="logo"
                                        className="hover:scale-105 transition-transform"
                                    />
                                )}
                                {mode === MODE_DARK && (
                                    <img
                                        src="/img/logo/logo-dark-full1.png"
                                        width={50}
                                        height={50}
                                        alt="logo"
                                        className="hover:scale-105 transition-transform"
                                    />
                                )}
                                <span className="font-bold text-lg bg-clip-text text-transparent bg-[#B1743C] dark:bg-[#060606]">
                                    HEIROGLF
                                </span>
                            </Link>
                            <div className="flex items-center gap-6">
                                {/* <Link href="/privacy" className="text-sm text-white hover:text-[#B1743C] dark:hover:text-black transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-sm text-white hover:text-[#B1743C] dark:hover:text-black transition-colors">
                                    Terms of Service
                                </Link> */}
                                <div className="flex gap-4">
                                    <Link href="https://twitter.com/heiroglf" target="_blank" className="text-white hover:text-[#B1743C] dark:hover:text-black transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </Link>
                                    <Link href="https://instagram.com/heiroglf" target="_blank" className="text-white hover:text-[#B1743C] dark:hover:text-black transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
                                        </svg>
                                    </Link>
                                    <Link href="https://t.me/heiroglf" target="_blank" className="text-white hover:text-[#B1743C] dark:hover:text-black transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <span className="text-sm text-white flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
                                Company Reg: CS076570523
                            </span>

                        </div>
                        {/* New info row: email, socials, company registration */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-4 px-4">
                            <a href="mailto:letstalk@heiroglf.com" className="text-sm text-white hover:underline flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm8 0a12 12 0 11-24 0 12 12 0 0124 0z" /></svg>
                                letstalk@heiroglf.com
                            </a>

                            <p className="text-sm text-gray-500 dark:text-white">
                                Copyright © {year} HEIROGLF. All rights reserved.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>


    )
}

export default LandingFooter
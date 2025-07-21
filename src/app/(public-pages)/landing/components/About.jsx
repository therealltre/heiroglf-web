'use client'
import { useState, useEffect } from 'react';
import Container from './LandingContainer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TbExchange,
    TbCoin,
    TbSchool,
    TbDeviceMobile,
    TbHeadset,
    TbShieldLock,
    TbUsers,
    TbWorld
} from 'react-icons/tb';

const featureList = [
    {
        id: 'trading',
        title: 'Secure Trading',
        description: 'Instant trading with bank-grade security and low fees across 50+ digital assets.',
        icon: <TbExchange size={32} />,
        color: 'text-[#B1743C]'
    },
    {
        id: 'africa',
        title: 'Africa-First',
        description: 'Built for African markets with local payment methods and regulatory compliance.',
        icon: <TbWorld size={32} />,
        color: 'text-[#B1743C]'
    },
    {
        id: 'education',
        title: 'Crypto Education',
        description: 'Free learning resources to help you master digital assets and blockchain technology.',
        icon: <TbSchool size={32} />,
        color: 'text-[#B1743C]'
    },
    {
        id: 'mobile',
        title: 'Mobile-First',
        description: 'Seamless experience on any device with our high-performance mobile platform.',
        icon: <TbDeviceMobile size={32} />,
        color: 'text-[#B1743C]'
    },
    {
        id: 'support',
        title: '24/7 Support',
        description: 'Dedicated multilingual support team available around the clock.',
        icon: <TbHeadset size={32} />,
        color: 'text-[#B1743C]'
    },
    {
        id: 'security',
        title: 'Institutional Security',
        description: '98% cold storage, multi-sig wallets, and regular security audits.',
        icon: <TbShieldLock size={32} />,
        color: 'text-[#B1743C]'
    },
    {
        id: 'community',
        title: 'Community Focus',
        description: 'Local meetups, AMAs, and initiatives to grow Africa\'s crypto ecosystem.',
        icon: <TbUsers size={32} />,
        color: 'text-[#B1743C]'
    },
];

const AboutSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div id="about" className="relative py-10 md:py-40 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden">
            {/* Video Background */}
            {isClient && (
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
                    src="/video/landing/coins-stack.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            )}
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
            <div className="relative z-20">
                <Container>
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, type: 'spring', bounce: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B1743C] to-[#B1743C]/50">
                                Redefining African Finance
                            </span>
                        </motion.h2>

                        <motion.div className="mx-auto max-w-7xl space-y-8">
                            <div className='flex mx-auto max-w-3xl'>
                                <p className="text-lg text-gray-600 dark:text-gray-300 ">
                                    HEIROGLF is a Pan-African crypto exchange redefining finance for the continent. Built for Africa, by Africa, we empower users to trade, save, and invest securely in digital assets.
                                </p>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-[#B1743C]/10 dark:bg-[#B1743C]/20 rounded-xl border border-[#B1743C]/20">
                                    <h3 className="text-xl font-semibold text-[#B1743C] dark:text-[#E3A771] mb-3">Our Mission</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        To create an accessible platform that integrates local payment solutions, ensures low fees, and provides bank-grade security—making cryptocurrency trading simple and reliable for everyone.
                                    </p>
                                </div>
                                <div className="p-6 bg-[#B1743C]/10 dark:bg-[#B1743C]/20 rounded-xl border border-[#B1743C]/20">
                                    <h3 className="text-xl font-semibold text-[#B1743C] dark:text-[#E3A771] mb-3">Our Vision</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        We’re bridging Africa to the global decentralized economy with a platform designed for speed, compliance, and trust.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="flex flex-wrap -m-3 justify-center">
                        {featureList.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    type: 'spring',
                                    bounce: 0.1,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="relative w-full sm:w-1/2 lg:w-1/4 p-3"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.span
                                            className="absolute inset-0 h-full w-full bg-[#B1743C]/10 dark:bg-[#B1743C]/20 block rounded-3xl"
                                            layoutId="hoverBackground"
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                transition: { duration: 0.15 },
                                            }}
                                            exit={{
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.15,
                                                    delay: 0.2,
                                                },
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                                <div className="p-6 rounded-2xl z-10 relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 h-full group hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex flex-col h-full">
                                        <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-[#B1743C]/10 dark:bg-[#B1743C]/20 mb-4 group-hover:bg-[#B1743C]/20 dark:group-hover:bg-[#B1743C]/30 transition-colors ${feature.color}`}>
                                            {feature.icon}
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* <motion.div
                        className="mt-20 text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, type: 'spring', bounce: 0.1, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-medium mb-6 text-gray-800 dark:text-white">
                            Join Africa's Crypto Revolution
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-3 bg-[#B1743C] hover:bg-[#9A6330] text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-[#B1743C]/30">
                                Start Trading
                            </button>
                            <button className="px-8 py-3 bg-transparent border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-full transition-colors">
                                Learn More
                            </button>
                        </div>
                    </motion.div> */}
                </Container>
            </div>
        </div>
    )
}

export default AboutSection;
'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TbShieldLock, TbCoinBitcoin, TbArrowsExchange, TbRocket, TbChartLine, TbWallet } from 'react-icons/tb';

const features = [
    {
        icon: <TbShieldLock size={28} />,
        title: 'Bank-Grade Security',
        description: 'Military-grade encryption and multi-signature wallets keep your assets safe.'
    },
    {
        icon: <TbArrowsExchange size={28} />,
        title: 'Instant Swaps',
        description: 'Exchange 100+ cryptocurrencies instantly with zero slippage.'
    },
    {
        icon: <TbCoinBitcoin size={28} />,
        title: 'Staking Rewards',
        description: 'Earn up to 12% APY on your digital assets with flexible staking.'
    },
    {
        icon: <TbRocket size={28} />,
        title: 'Lightning Network',
        description: 'Experience instant Bitcoin transactions with minimal fees.'
    },
    {
        icon: <TbChartLine size={28} />,
        title: 'AI Trading',
        description: 'Benefit from AI-optimized trading strategies for better returns.'
    },
    {
        icon: <TbWallet size={28} />,
        title: 'Multi-Chain Support',
        description: 'Manage assets across 15+ blockchains in one secure wallet.'
    }
];

const SectionStackFeatures = () => {
    const ref = useRef(null);
    const N = features.length;
    const totalCards = N + 1; // Including the institutional liquidity card
    // const sectionHeight = (totalCards + 1) * 100;
    const sectionHeight = totalCards * 100;
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Regular feature cards
    const cards = features.map((feature, i) => {
        const start = i / (totalCards + 3);
        const middle = (i + 1) / (totalCards + 3);
        const end = (i + 2) / (totalCards + 3);

        const y = useTransform(scrollYProgress, [start, middle, end], [400, 0, -10]);
        const scale = useTransform(scrollYProgress, [start, middle], [0.9, 1]);

        return { ...feature, y, scale };
    });

    // Institutional Liquidity Card (follows the same pattern)
    const liquidityCardStart = N / (totalCards + 3);
    const liquidityCardMiddle = (N + 1) / (totalCards + 3);
    const liquidityCardEnd = (N + 2) / (totalCards + 3);

    const liquidityY = useTransform(scrollYProgress, [liquidityCardStart, liquidityCardMiddle, liquidityCardEnd], [600, 0, -10]);
    const liquidityScale = useTransform(scrollYProgress, [liquidityCardStart, liquidityCardMiddle], [0.9, 1]);
    const liquidityOpacity = useTransform(scrollYProgress, [liquidityCardStart - 0.05, liquidityCardStart, liquidityCardMiddle], [0, 1, 1]);

    return (
        <div id="discover">
            <section
                ref={ref}
                className="relative"
                style={{ height: `${sectionHeight}vh` }}
            >
                <div className="sticky top-0 h-screen flex flex-col justify-center items-center w-full">
                    <div className="w-full mx-auto px-4">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                                Discover the HEIROGLF Platform
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-white max-w-xl mx-auto">
                                Explore the powerful features that make HEIROGLF the next-generation crypto platform.
                            </p>
                        </div>

                        {/* Card Stack Container */}
                        <div className="relative flex flex-col items-center justify-center" style={{ minHeight: 350 }}>
                            {/* Regular Feature Cards */}
                            {cards.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        y: feature.y,
                                        scale: feature.scale,
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        margin: '0 auto',
                                        zIndex: 10 + i
                                    }}
                                    className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex items-start gap-4 w-full max-w-4xl"
                                >
                                    <div className="w-14 h-14 rounded-lg bg-[#B1743C]/10 flex items-center justify-center text-[#B1743C] text-3xl shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1 text-gray-900">{feature.title}</h3>
                                        <p className="text-gray-600 text-base">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Institutional Liquidity Card - Now follows same animation pattern */}
                            <motion.div
                                style={{
                                    y: liquidityY,
                                    scale: liquidityScale,
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    margin: '0 auto',
                                    zIndex: 10 + N
                                }}
                                className="w-full max-w-5xl mx-auto"
                            >
                                <div className="relative bg-[#1A1A1A] rounded-2xl p-8 md:p-12 overflow-hidden">
                                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNCMTc0M0MiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]" />
                                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-4">
                                                Institutional Liquidity
                                            </h3>
                                            <p className="text-gray-300 mb-6 text-lg">
                                                Access deep liquidity pools with tight spreads across all major trading pairs.
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                {['BTC', 'ETH', 'SOL', 'XRP', 'ADA', 'DOT'].map((ticker) => (
                                                    <div key={ticker} className="px-4 py-2 bg-[#B1743C]/10 rounded-lg flex items-center border border-[#B1743C]/20">
                                                        <span className="text-[#B1743C] font-mono font-bold">{ticker}</span>
                                                        <span className="ml-2 text-green-400 text-sm font-medium">+2.4%</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="hidden lg:block">
                                            <div className="bg-[#B1743C]/10 rounded-lg shadow-2xl border border-[#B1743C]/20 p-4">
                                                <div className="aspect-video bg-gray-800 rounded flex items-center justify-center text-gray-400">
                                                    [Trading Chart Visualization]
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Decorative Crypto SVGs */}
                <div className="pointer-events-none absolute inset-0 z-0">
                    {/* Top-left */}
                    <div className="absolute top-0 left-0 w-40 h-40 opacity-10 rotate-12">
                        <TbCoinBitcoin className="w-full h-full text-[#B1743C]" />
                    </div>

                    {/* Bottom-right */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 -rotate-12">
                        <TbWallet className="w-full h-full text-[#B1743C]" />
                    </div>

                    {/* Optional: Center gradient burst */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full lg:w-[400px] h-[400px] bg-[#B1743C] rounded-full blur-3xl" />
                </div>

            </section>
        </div>
    );
};

export default SectionStackFeatures;
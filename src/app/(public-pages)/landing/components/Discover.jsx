'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Bitcoin3D from '@/assets/svg/Bitcoin3D';
import Wallet3D from '@/assets/svg/Wallet3D';
import CryptoStack3D from '@/assets/svg/CryptoStack3D';
import Shield3D from '@/assets/svg/Shield3D';
import Swap3D from '@/assets/svg/Swap3D';
import Staking3D from '@/assets/svg/Staking3D';
import Lightning3D from '@/assets/svg/Lightning3D';
import AI3D from '@/assets/svg/AI3D';
import Chains3D from '@/assets/svg/Chains3D';

const features = [
    {

        title: 'Bank-Grade Security',
        description: 'Military-grade encryption and multi-signature wallets keep your assets safe.',
        details: 'All transactions are protected by advanced cryptography and 24/7 monitoring.',
        stats: '99.99% uptime | SOC2 Certified',
        illustration: <Shield3D size={80} />,

    },
    {

        title: 'Instant Swaps',
        description: 'Exchange 100+ cryptocurrencies instantly with zero slippage.',
        details: 'Our proprietary engine ensures the best rates and zero slippage on every trade.',
        stats: '100+ coins | 0% slippage',
        illustration: <Swap3D size={80} />,

    },
    {

        title: 'Staking Rewards',
        description: 'Earn up to 12% APY on your digital assets with flexible staking.',
        details: 'Flexible terms, daily payouts, and no lock-in period for your assets.',
        stats: 'Up to 12% APY | Flexible terms',
        illustration: <Staking3D size={80} />,

    },
    {

        title: 'Lightning Network',
        description: 'Experience instant Bitcoin transactions with minimal fees.',
        details: 'Leverage the power of the Lightning Network for fast, low-cost payments.',
        stats: 'Instant | Low fees',
        illustration: <Lightning3D size={80} />,

    },
    {

        title: 'AI Trading',
        description: 'Benefit from AI-optimized trading strategies for better returns.',
        details: 'Automated trading powered by advanced machine learning algorithms.',
        stats: 'AI-driven | Backtested strategies',
        illustration: <AI3D size={80} />,

    },
    {

        title: 'Multi-Chain Support',
        description: 'Manage assets across 15+ blockchains in one secure wallet.',
        details: 'Seamlessly transfer, swap, and monitor assets across multiple chains.',
        stats: '15+ blockchains | Unified wallet',
        illustration: <Chains3D size={80} />,

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

        const y = useTransform(scrollYProgress, [start, middle, end], [500, 0, -10]);
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
                                    className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 min-h-[200px] flex items-start gap-6 w-full max-w-4xl"
                                >
                                    <div className="flex flex-col items-center justify-start w-32 shrink-0">
                                        <div className="mb-2">{feature.illustration}</div>

                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-1 text-gray-900">{feature.title}</h3>
                                        <p className="text-gray-600 text-base mb-2">{feature.description}</p>
                                        <p className="text-sm text-gray-500 mb-1">{feature.details}</p>
                                        <div className="text-xs text-gray-400 mb-2">{feature.stats}</div>
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
                    {/* Sticky Top SVG */}
                    <div className="sticky top-10 h-0 w-full">
                        {/* Top-left */}
                        <motion.div
                            className="absolute left-0 w-40 h-40 opacity-90 rotate-12"
                            style={{ top: 0 }}
                            initial={{ y: 0 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Bitcoin3D size={130} />
                            {/* <CryptoStack3D size={130} /> */}
                        </motion.div>
                    </div>

                    {/* Sticky Bottom SVG */}
                    <div className="sticky top-220 h-0 w-full">
                        <motion.div
                            className="absolute right-0 w-32 h-32 opacity-90 -rotate-12"
                            style={{ bottom: 0 }}
                            initial={{ y: 0 }}
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Wallet3D size={130} />
                        </motion.div>
                    </div>

                    {/* Optional: Center gradient burst */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full lg:w-[400px] h-[400px] bg-[#B1743C] rounded-full blur-3xl" />
                </div>

            </section>
        </div>
    );
};

export default SectionStackFeatures;
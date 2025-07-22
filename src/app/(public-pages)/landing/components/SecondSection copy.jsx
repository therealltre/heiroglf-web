import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from './LandingContainer';
import {
    TbShieldLock,
    TbCoinBitcoin,
    TbArrowsExchange,
    TbRocket,
    TbChartLine,
    TbWallet
} from 'react-icons/tb';

const FeatureCard = ({ icon, title, description, angle, radius, index }) => {
    // Convert polar to Cartesian coordinates and shift left by 40px
    const x = Math.cos(angle * Math.PI / 180) * radius - 120;
    const y = Math.sin(angle * Math.PI / 180) * radius - 80;

    return (
        <motion.div
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, x, y }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-20%" }}
            className="absolute flex gap-2 w-64 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg dark:shadow-gray-700/20 border border-gray-100 dark:border-gray-700"
            style={{
                left: '50%',
                top: '50%',
            }}
        >
            <div className="w-14 h-14 rounded-lg bg-[#B1743C]/10 flex items-center justify-center mb-4">
                <span className="text-[#B1743C] text-2xl">{icon}</span>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </motion.div>
    );
};

const CircularFeatureDisplay = ({ features, radius }) => (
    <div className="relative h-[600px] hidden lg:block">
        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#B1743C]/10 rounded-full flex items-center justify-center p-8 border-2 border-[#B1743C]/30 z-10">
            <Image
                src="/img/logo/logo-light-full1.png"
                width={160}
                height={160}
                alt="HIEROGLF Logo"
                className="object-contain"
            />
        </div>

        {/* SVG Branch Connections */}
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 600"
            className="absolute inset-0 w-full h-full pointer-events-none"
        >
            {features.map((feature, i) => {
                const x1 = 300;
                const y1 = 300;
                const x2 = 300 + Math.cos(feature.angle * Math.PI / 180) * radius * 0.9;
                const y2 = 300 + Math.sin(feature.angle * Math.PI / 180) * radius * 0.9;
                return (
                    <path
                        key={`branch-${i}`}
                        d={`M${x1},${y1} L${x2},${y2}`}
                        stroke="#B1743C"
                        strokeWidth="2"
                        strokeDasharray="5,3"
                        fill="none"
                    />
                );
            })}
        </svg>

        {/* Feature Cards */}
        {features.map((feature, i) => (
            <FeatureCard
                key={i}
                index={i}
                angle={feature.angle}
                radius={radius}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
            />
        ))}
    </div>
);

const MobileFeatureList = ({ features }) => (
    <div className="space-y-6 lg:hidden">
        {features.map((feature, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-700/20 border border-gray-100 dark:border-gray-700"
            >
                <div className="w-14 h-14 rounded-lg bg-[#B1743C]/10 flex items-center justify-center mb-4">
                    <span className="text-[#B1743C] text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
        ))}
    </div>
);

const CryptoFeatures = () => {
    const features = [
        { angle: 30, icon: <TbShieldLock size={24} />, title: "Bank-Grade Security", description: "Military-grade encryption and multi-signature wallets." },
        { angle: 90, icon: <TbArrowsExchange size={24} />, title: "Instant Swaps", description: "Exchange 100+ cryptos with zero slippage." },
        { angle: 150, icon: <TbCoinBitcoin size={24} />, title: "Staking Rewards", description: "Earn up to 12% APY on your assets." },
        { angle: 210, icon: <TbRocket size={24} />, title: "Lightning Network", description: "Instant Bitcoin transactions." },
        { angle: 270, icon: <TbChartLine size={24} />, title: "AI Trading", description: "Optimized trading strategies." },
        { angle: 330, icon: <TbWallet size={24} />, title: "Multi-Chain", description: "Manage 15+ blockchains." }
    ];
    const radius = 260; // Distance from center to cards

    return (
        <section className="relative py-20 md:py-32 bg-[#060606] overflow-hidden">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-white"
                    >
                        The HIEROGLF Ecosystem
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Institutional-grade technology meets decentralized finance innovation
                    </motion.p>
                </div>

                <CircularFeatureDisplay features={features} radius={radius} />
                <MobileFeatureList features={features} />

                {/* Institutional Liquidity Section */}
                <div className="relative bg-[#1A1A1A] rounded-2xl p-8 md:p-12 overflow-hidden mt-20">
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
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="hidden lg:block"
                        >
                            <div className="bg-[#B1743C]/10 rounded-lg shadow-2xl border border-[#B1743C]/20 p-4">
                                <div className="aspect-video bg-gray-800 rounded flex items-center justify-center text-gray-400">
                                    [Trading Chart Visualization]
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CryptoFeatures;
'use client'
import { useEffect, useState } from 'react'
import NavList from './NavList'
import Drawer from '@/components/ui/Drawer'
import classNames from '@/utils/classNames'
import useScrollTop from '@/utils/hooks/useScrollTop'
import Image from 'next/image'
import Link from 'next/link'
import { TbMenu2 } from 'react-icons/tb'
import { Button } from '@/components/ui'

const navMenu = [
    {
        title: 'About',
        value: 'about',
        to: 'about',
    },
    {
        title: 'Discover',
        value: 'discover',
        to: 'discover',
    },
    {
        title: 'Wait List',
        value: 'wait-list',
        to: 'footer',
    },

]

const Navigation = ({ toggleMode, mode }) => {
    const { isSticky } = useScrollTop()

    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = () => {
        setIsOpen(true)
    }

    const onDrawerClose = () => {
        setIsOpen(false)
    }

    const [hasOffset, setHasOffset] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHasOffset(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div
            style={{ transition: 'all 0.2s ease-in-out' }}
            className={classNames(
                'w-full fixed inset-x-0 z-[50]',
                isSticky ? 'top-4' : 'top-0',
            )}
        >
            <div
                className={classNames(
                    'flex flex-row self-start items-center justify-between py-3 max-w-7xl mx-auto px-4 rounded-xl relative z-[60] w-full transition duration-200',
                    isSticky
                        ? 'bg-white dark:bg-gray-800 shadow-lg'
                        : 'bg-transparent dark:bg-transparent',
                )}
            >
                <Button
                    onClick={openDrawer}
                    className="flex lg:hidden items-center gap-4"
                >
                    <TbMenu2 size={24} />
                </Button>
                <Drawer
                    title="Navigation"
                    isOpen={isOpen}
                    onClose={onDrawerClose}
                    onRequestClose={onDrawerClose}
                    width={250}
                    placement="left"
                    overlayClassName="z-[70]" // ensure overlay is above navbar
                    className="z-[80]" // ensure drawer content is above everything
                >
                    <div className="flex flex-col gap-4">
                        <NavList onTabClick={onDrawerClose} tabs={navMenu} />
                        {/* Show Get Started button only in Drawer (mobile) */}
                        <Button
                            variant="solid"
                            className="bg-[#B1743C] text-white hover:bg-[#B1743C]/80 px-4 py-2 border border-gray-400 hover:border-white block lg:hidden mt-4"
                        >
                            Get Started
                        </Button>
                    </div>
                </Drawer>
                <Link href="/">
                    {mode === 'light' && (
                        <Image
                            src="/img/logo/logo-dark-full1.png"
                            width={50}
                            height={50}
                            alt="logo"
                        />
                    )}
                    {mode === 'dark' && (
                        <Image
                            src="/img/logo/logo-light-full1.png"
                            width={50}
                            height={50}
                            alt="logo"
                        />
                    )}
                </Link>
                <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200 [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar">
                    <NavList tabs={navMenu} />
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="plain"
                        className={classNames("z-50 text-white hover:bg-[#B1743C]/80 hover:text-white px-4 py-2 border border-gray-400 hover:border-white",
                            hasOffset
                                ? 'text-black dark:text-white'
                                : 'text-white')}
                    >
                        Login
                    </Button>
                    {/* Hide Get Started button in navbar on mobile, show only on lg+ */}
                    <Button
                        variant="solid"
                        className="z-50 bg-[#B1743C] text-white hover:bg-[#B1743C]/80 px-4 py-2 border border-gray-400 hover:border-white hidden lg:block"
                    >
                        Get Started
                    </Button>

                    {/* <button
                        className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 hover:shadow-input dark:text-neutral-500"
                        onClick={toggleMode}
                    >
                        <svg
                            className="lucide lucide-sun rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            fill="none"
                            height="16"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                        <svg
                            className="lucide lucide-moon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            fill="none"
                            height="16"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                        <span className="sr-only">Toggle theme</span>
                    </button> */}

                    {/* <div className="z-50 border border-gray-200 dark:border-gray-700 rounded-md items-center justify-center gap-2 py-1 px-4 text-white bg-[#B1743C] hover:bg-[#925c2e] dark:hover:bg-gray-700 cursor-pointer transition">
                        <button className="cursor-pointer">Login</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navigation

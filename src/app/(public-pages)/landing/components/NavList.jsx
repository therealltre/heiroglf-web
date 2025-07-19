'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
// eslint-disable-next-line import/named
import { Link } from 'react-scroll'
import NextLink from 'next/link'
import classNames from '@/utils/classNames'

const NavList = ({ tabs: propTabs, tabClassName, onTabClick }) => {
    const [active, setActive] = useState(propTabs[0])
    const [show, setShow] = useState(false)

    const moveSelectedTabToTop = (idx) => {
        setShow(true)
        const newTabs = [...propTabs]
        const selectedTab = newTabs.splice(idx, 1)
        newTabs.unshift(selectedTab[0])

        setActive(newTabs[0])
        onTabClick?.()
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
        <>
            {propTabs.map((tab, idx) => (
                <button
                    key={tab.title}
                    className={classNames(
                        'relative px-5 py-2 rounded-xl',
                        tabClassName,
                    )}
                    onClick={() => {
                        moveSelectedTabToTop(idx)
                    }}
                    onMouseEnter={() => moveSelectedTabToTop(idx)}
                    onMouseLeave={() => setShow(false)}
                >
                    {active.value === tab.value && (
                        <motion.div
                            layoutId="clickedbutton"
                            transition={{
                                type: 'spring',
                                bounce: 0.3,
                                duration: 0.6,
                            }}
                            className={classNames(
                                'absolute inset-0 rounded-xl',
                                show && 'bg-gray-100 dark:bg-gray-700',
                            )}
                        />
                    )}
                    { }
                    {tab.to && (
                        <Link
                            smooth
                            to={tab.to}
                            duration={500}
                            className={classNames(
                                'relative block z-10 px-1 transition-colors duration-200',
                                hasOffset
                                    ? 'text-black dark:text-white'
                                    : active.value === tab.value
                                        ? 'text-[#B1743C] dark:text-white font-semibold'
                                        : 'text-white dark:text-white hover:text-black dark:hover:text-white'
                            )}
                        >
                            {tab.title}
                        </Link>

                    )}



                </button>
            ))}
        </>
    )
}

export default NavList

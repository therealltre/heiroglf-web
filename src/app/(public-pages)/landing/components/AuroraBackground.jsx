import classNames from '@/utils/classNames'
import React from 'react'

const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    auroraClassName,
    ...props
}) => {
    return (
        <div
            className={classNames(
                'relative flex flex-col items-center justify-center bg-[#B1743C] dark:bg-[#060606]  transition-bg',
                className,
            )}
            {...props}
        >
            <div
                className={classNames(
                    'absolute inset-0 overflow-hidden',
                    auroraClassName,
                )}
            >
                <div
                    className={classNames(
                        `[--dark-gradient:repeating-linear-gradient(100deg,var(--color-black)_0%,var(--color-black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--color-black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#8B4513_0%,#A0522D_15%,#B1743C_20%,#D2B48C_25%,#A0522D_30%)]
            [--transparent:rgba(255,255,255,0)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[50px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            animate-aurora after:[background-attachment:fixed]
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
                        showRadialGradient &&
                        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
                    )}
                ></div>
            </div>
            {children}
        </div>
    );
}

export default AuroraBackground;

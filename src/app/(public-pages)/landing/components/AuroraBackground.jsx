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
                'relative flex flex-col items-center justify-center bg-black/10 backdrop-blur-3xl transition-bg',
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
                        `
            [--aurora:radial-gradient(100%_100%_at_50%_0%,#3B2F2F_0%,#5C4033_33%,#8B4513_66%,#000000_100%)]
            [--transparent:rgba(0,0,0,0)]
            [background-image:var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[30px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora)]
            after:[background-size:200%,_100%]
            after:[background-attachment:fixed]
            animate-aurora
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
                        showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_50%)]`,
                    )}
                ></div>
            </div>
            {children}
        </div>
    );
};

export default AuroraBackground;

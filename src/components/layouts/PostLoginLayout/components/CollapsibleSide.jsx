'use client'
import SideNav from '@/components/template/SideNav'
import Header from '@/components/template/Header'
import MobileNav from '@/components/template/MobileNav'
import SideNavToggle from '@/components/template/SideNavToggle'
import UserProfileDropdown from '@/components//template/UserProfileDropdown'
import LayoutBase from '@/components//template/LayoutBase'
import { LAYOUT_COLLAPSIBLE_SIDE } from '@/constants/theme.constant'

const CollapsibleSide = ({ children }) => {
    return (
        <LayoutBase
            type={LAYOUT_COLLAPSIBLE_SIDE}
            className="app-layout-collapsible-side flex flex-auto flex-col"
        >
            <div className="flex flex-auto min-w-0">
                <SideNav />
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
                    <Header
                        className="shadow-sm dark:shadow-2xl"
                        headerStart={
                            <>
                                <MobileNav />
                                <SideNavToggle />
                            </>
                        }
                        headerEnd={
                            <>
                                <UserProfileDropdown hoverable={false} />
                            </>
                        }
                    />
                    <div className="h-full flex flex-auto flex-col">
                        {children}
                    </div>
                </div>
            </div>
        </LayoutBase>
    )
}

export default CollapsibleSide

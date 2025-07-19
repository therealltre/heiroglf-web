import React from 'react'
import PostLoginLayout from '@/components/layouts/PostLoginLayout'
import Landing from '../(public-pages)/landing/components/Landing'

const Layout = async ({ children }) => {
    return <PostLoginLayout>{children}</PostLoginLayout>
    // return <Landing />
}

export default Layout

import appConfig from '@/configs/app.config'
import { redirect } from 'next/navigation'
import Landing from './(public-pages)/landing/components/Landing'

const Page = () => {
    // redirect(appConfig.authenticatedEntryPath)
    return <Landing />
}

export default Page

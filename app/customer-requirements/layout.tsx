import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Find the Right Helper for Your Home | EzyHelpers',
    description: 'Share your requirements and we will match you with the most suitable helper for your home. Verified maids, cooks, babysitters, and more.',
    keywords: 'customer requirements, hire helper, domestic help, maid, cook, babysitter',
    robots: {
        index: true,
        follow: true,
    }
}

export default function CustomerRequirementsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

import { Metadata } from 'next'
import React from 'react'
import OnlineClient from './OnlineClient'

export const metadata: Metadata = {
    title: 'OVCN Online | OVCN',
    description: 'Join us online'
}

const page = () => {
    return <OnlineClient />
}

export default page
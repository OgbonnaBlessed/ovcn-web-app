import { Metadata } from 'next'
import React from 'react'
import GiveClient from './GiveClient'

export const metadata: Metadata = {
    title: 'OVCN Give | OVCN',
    description: 'Partner with us'
}

const page = () => {
    return <GiveClient />
}

export default page
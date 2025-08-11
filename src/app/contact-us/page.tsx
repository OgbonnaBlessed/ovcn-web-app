import React from 'react'
import ContactClient from './ContactClient'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'OVCN Contact | OVCN',
    description: 'You can reach us anytime'
}

const page = () => {
    return <ContactClient />
}

export default page
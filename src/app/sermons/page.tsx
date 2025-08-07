import React from 'react'
import { Metadata } from 'next';
import SermonPageClient from './SermonPageClient';

export const metadata: Metadata = {
    title: 'OVCN Sermons | OVCN',
    description: 'What God is saying now'
}

export default function SermonsPage() {
    return <SermonPageClient />
}
import React from 'react'
import { RealmProvider } from '@realm/react'
import { Stack } from 'expo-router'

export default function AppLayout() {
    return (
        <RealmProvider>
            <Stack />
        </RealmProvider>
    )
}
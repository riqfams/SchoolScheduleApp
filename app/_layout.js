import React from 'react'
import { RealmProvider } from '@realm/react'
import { Stack } from 'expo-router'
import "../global.css"

export default function AppLayout() {
    return (
        <RealmProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </RealmProvider>
    )
}
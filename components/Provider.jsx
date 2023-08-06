"use client"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

export const Provider = ({ children }) => {
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    
    if(!mounted) return <>{children}</>;
    return <ThemeProvider>{ children}</ThemeProvider>
}
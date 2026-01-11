"use client"

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    className?: string
    gradient?: boolean
}

export function GlassCard({ children, className, gradient = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "relative overflow-hidden rounded-2xl border bg-background/50 p-6 backdrop-blur-xl transition-colors hover:bg-background/80",
                gradient && "bg-gradient-to-b from-white/10 to-white/5",
                className
            )}
            {...props}
        >
            <div className="relative z-10">{children}</div>
            {gradient && (
                <div className="absolute inset-0 z-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            )}
        </motion.div>
    )
}

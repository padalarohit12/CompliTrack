"use client"

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import { Button } from "@/components/ui/button"
import { ComingSoon } from "@/components/ui/coming-soon"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
            {/* Million Dollar Background Architecture */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background overflow-hidden">
                {/* 1. The Grid (Structure) */}
                <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

                {/* 2. The Spotlight (Focus) */}
                <div className="absolute md:-top-[20%] -top-[10%] left-1/2 -translate-x-1/2 md:w-[1200px] w-[600px] md:h-[800px] h-[400px] rounded-[100%] bg-gradient-to-b from-primary/30 via-blue-500/10 to-transparent blur-[90px] opacity-70" />

                {/* 3. The Stars (Detail - Subtle Noise) */}
                <div className="absolute inset-0 bg-dot-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-[180px] h-[180px] mx-auto -mb-10 relative z-10"
                >
                    <DotLottieReact
                        src="https://lottie.host/6d38e4b5-1255-4547-b53e-d7cc919184bc/xGZ9aKzxzn.lottie"
                        loop
                        autoplay
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 rounded-full border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm text-muted-foreground mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-500" />
                    <span className="font-medium">Early Access Now Open</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    Never Miss a <br className="hidden md:block" />
                    Compliance Deadline.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-xl text-lg text-muted-foreground mb-10 text-balance"
                >
                    The deadline protection system for CAs and small businesses.
                    Stop relying on Excel and anxiety. Start relying on CompliTrack.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col gap-6 justify-center items-center mb-16"
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <ComingSoon
                            trigger={
                                <Button size="lg" className="h-12 px-8 text-base rounded-full group">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            }
                        />
                        <Link href="#how-it-works">
                            <Button variant="ghost" size="lg" className="h-12 px-8 text-base rounded-full">
                                See How It Works
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>No credit card required</span>
                        <span className="mx-2">•</span>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>14-day free trial</span>
                    </div>

                    {/* Infinite Ticker */}
                    <div className="pt-8 w-full max-w-4xl overflow-hidden relative">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                            <span>Integrates seamlessly with:</span>
                        </div>
                        <div className="flex gap-12 animate-infinite-scroll whitespace-nowrap opacity-70">
                            {["WhatsApp", "Gmail", "Tally", "Excel", "Zoho", "Outlook", "Slack", "QuickBooks"].map((tool) => (
                                <span key={tool} className="text-lg font-semibold flex items-center gap-2">
                                    {/* Placeholder for icons - using text for cleaner look without assets */}
                                    {tool}
                                </span>
                            ))}
                            {/* Duplicate for infinite effect */}
                            {["WhatsApp", "Gmail", "Tally", "Excel", "Zoho", "Outlook", "Slack", "QuickBooks"].map((tool) => (
                                <span key={`${tool}-dup`} className="text-lg font-semibold flex items-center gap-2">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* High-Fidelity Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-background/40 shadow-2xl backdrop-blur-xl overflow-hidden"
                >
                    {/* Fake Browser Header */}
                    <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/10 bg-black/20 flex items-center px-4 gap-2 z-20">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                        <div className="ml-4 h-5 w-64 bg-white/5 rounded-md hidden sm:block" />
                    </div>

                    <div className="flex h-[400px] pt-10">
                        {/* Sidebar */}
                        <div className="w-48 hidden md:flex flex-col border-r border-white/10 bg-black/20 p-4 gap-4">
                            <div className="h-8 w-8 rounded bg-primary/20 mb-4" />
                            <div className="space-y-2">
                                <div className="h-8 w-full rounded bg-primary/10 text-primary-foreground/80 flex items-center px-3 text-sm font-medium">Dashboard</div>
                                <div className="h-8 w-full rounded hover:bg-white/5 text-muted-foreground flex items-center px-3 text-sm transition-colors">Deadlines</div>
                                <div className="h-8 w-full rounded hover:bg-white/5 text-muted-foreground flex items-center px-3 text-sm transition-colors">Calendar</div>
                                <div className="h-8 w-full rounded hover:bg-white/5 text-muted-foreground flex items-center px-3 text-sm transition-colors">Settings</div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6 bg-gradient-to-br from-background/50 to-background/80 relative">
                            {/* Header */}
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Welcome back, Rohit</h3>
                                    <p className="text-muted-foreground">You have 2 upcoming deadlines.</p>
                                </div>
                                <div className="text-right hidden sm:block">
                                    <div className="text-sm text-muted-foreground">Compliance Score</div>
                                    <div className="text-2xl font-bold text-green-500">92%</div>
                                </div>
                            </div>

                            {/* Deadline Cards */}
                            <div className="space-y-4">
                                {/* Card 1: Overdue/Urgent */}
                                <motion.div
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="flex items-center gap-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5 cursor-pointer transition-colors"
                                >
                                    <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="font-semibold text-white">GST Return (GSTR-3B)</div>
                                        <div className="text-xs text-red-300">Due Today • Penalty Risk: High</div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-medium">Urgent</div>
                                </motion.div>

                                {/* Card 2: Upcoming */}
                                <motion.div
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer transition-colors"
                                >
                                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="font-semibold text-white">TDS Payment</div>
                                        <div className="text-xs text-muted-foreground">Due in 5 days</div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">Upcoming</div>
                                </motion.div>

                                {/* Card 3: Completed */}
                                <motion.div
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] opacity-60 cursor-pointer"
                                >
                                    <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="font-semibold text-muted-foreground">Professional Tax</div>
                                        <div className="text-xs text-muted-foreground">Paid on Jun 15</div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">Paid</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    )
}

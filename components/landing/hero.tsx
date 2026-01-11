"use client"

import { Button } from "@/components/ui/button"
import { ComingSoon } from "@/components/ui/coming-soon"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply filter" />
                <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-50 mix-blend-multiply filter" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
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
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
                >
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
                </motion.div>

                {/* Ghost Dashboard Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="relative mx-auto max-w-5xl rounded-xl border bg-background/50 shadow-2xl backdrop-blur-sm overflow-hidden"
                >
                    <div className="absolute top-0 left-0 right-0 h-10 border-b bg-muted/20 flex items-center px-4 gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-400/20" />
                        <div className="h-3 w-3 rounded-full bg-yellow-400/20" />
                        <div className="h-3 w-3 rounded-full bg-green-400/20" />
                    </div>

                    <div className="p-8 pt-16 grid gap-6 md:grid-cols-3">
                        {/* Fake Sidebar */}
                        <div className="hidden md:block space-y-4">
                            <div className="h-8 w-32 bg-muted/20 rounded-md animate-pulse" />
                            <div className="space-y-2">
                                <div className="h-8 w-full bg-muted/10 rounded-md" />
                                <div className="h-8 w-full bg-primary/5 border border-primary/10 rounded-md" />
                                <div className="h-8 w-full bg-muted/10 rounded-md" />
                            </div>
                        </div>

                        {/* Fake Content */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="flex justify-between items-center">
                                <div className="h-8 w-48 bg-muted/20 rounded-md" />
                                <div className="h-8 w-24 bg-primary/20 rounded-full" />
                            </div>

                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg border bg-card/50">
                                        <div className="h-10 w-10 rounded-full bg-muted/20 shrink-0" />
                                        <div className="space-y-2 flex-1">
                                            <div className="h-4 w-1/3 bg-muted/20 rounded" />
                                            <div className="h-3 w-1/4 bg-muted/10 rounded" />
                                        </div>
                                        <div className="h-6 w-20 bg-red-500/10 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    )
}

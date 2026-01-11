"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export function Solution() {
    const features = [
        "Stores all compliance & renewal dates",
        "Shows what’s due & what’s overdue",
        "Sends reminder emails automatically",
        "Helps you finish on time",
    ]

    return (
        <section id="solution" className="py-24">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built for Peace of Mind.</h2>
                    <p className="text-lg text-muted-foreground">
                        CompliTrack is designed to be boringly reliable. It just works.
                    </p>
                </motion.div>

                <GlassCard className="max-w-3xl mx-auto p-8 md:p-12 text-left bg-gradient-to-br from-primary/5 via-background/40 to-background/40" gradient>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 bg-green-500/10 p-1 rounded-full">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                    </div>
                                    <span className="text-lg font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="hidden md:flex justify-center flex-col items-center">
                            <div className="w-[200px] h-[200px]">
                                <DotLottieReact
                                    src="https://lottie.host/8e9aa10a-edd7-4d7b-b675-1ea14f50bce9/GTgfkRFqUP.lottie"
                                    loop
                                    autoplay
                                />
                            </div>
                            <p className="text-sm text-green-500 font-medium">Compliance Score: 100%</p>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    )
}

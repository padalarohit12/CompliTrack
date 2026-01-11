"use client"

import { Button } from "@/components/ui/button"
import { ComingSoon } from "@/components/ui/coming-soon"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative">
            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple Pricing.</h2>
                    <p className="text-lg text-muted-foreground">One price. All features. No hidden fees.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Monthly */}
                    <GlassCard className="flex flex-col text-left border-border/50">
                        <div className="mb-8">
                            <h3 className="text-lg font-medium text-muted-foreground mb-2">Monthly</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">₹499</span>
                                <span className="text-muted-foreground">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-500" /> Unlimited Deadlines</li>
                            <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-500" /> Email Reminders</li>
                            <li className="flex items-center gap-3"><Check className="h-5 w-5 text-green-500" /> Deadline History</li>
                        </ul>
                        <ComingSoon trigger={<Button variant="outline" className="w-full h-12">Start Free Trial</Button>} />
                    </GlassCard>

                    {/* Yearly */}
                    <GlassCard className="flex flex-col text-left border-primary/50 relative overflow-hidden" gradient>
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-bl-xl">
                            BEST VALUE
                        </div>
                        <div className="mb-8">
                            <h3 className="text-lg font-medium text-muted-foreground mb-2">Yearly</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">₹4,999</span>
                                <span className="text-muted-foreground">/yr</span>
                            </div>
                            <p className="text-sm text-green-600 font-medium mt-2">Save ₹1,000 per year</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> 2 Months Free</li>
                            <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Unlimited Deadlines</li>
                            <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Priority Support</li>
                        </ul>
                        <ComingSoon trigger={<Button className="w-full h-12 font-semibold">Start Free Trial</Button>} />
                    </GlassCard>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 inline-block"
                >
                    <div className="px-6 py-3 rounded-full bg-destructive/10 text-destructive border border-destructive/20 text-lg font-medium">
                        "One missed deadline costs more than a year of CompliTrack."
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

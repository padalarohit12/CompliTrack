"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { AlertCircle, FileSpreadsheet, MessageSquare, XCircle } from "lucide-react"

export function Problem() {
    const problems = [
        {
            icon: <XCircle className="h-8 w-8 text-red-500" />,
            title: "Missed Deadlines",
            description: "Forgot a filing date? The penalty is instant and expensive.",
            className: "md:col-span-2",
        },
        {
            icon: <FileSpreadsheet className="h-8 w-8 text-orange-500" />,
            title: "Excel Chaos",
            description: "Static sheets don't send reminders. They just sit there.",
            className: "md:col-span-1",
        },
        {
            icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
            title: "Client Blame",
            description: "\"Why didn't you remind me?\" is the worst thing to hear.",
            className: "md:col-span-1",
        },
        {
            icon: <AlertCircle className="h-8 w-8 text-yellow-500" />,
            title: "Renewal Anxiety",
            description: "Low-level panic that you're forgetting a license renewal.",
            className: "md:col-span-2",
        },
    ]

    return (
        <section id="problem" className="py-24 relative overflow-hidden bg-dot-pattern">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        The Compliance System is <span className="text-destructive">Broken</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Small businesses don't fail because they don't care. They fail because the current tools setup them up for failure.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {problems.map((problem, index) => (
                        <GlassCard
                            key={index}
                            className={`p-8 hover:bg-background/60 transition-colors ${problem.className}`}
                            gradient
                        >
                            <div className="flex flex-col h-full justify-between gap-4">
                                <div className="p-3 bg-background/50 w-fit rounded-xl border">
                                    {problem.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                                    <p className="text-muted-foreground">{problem.description}</p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

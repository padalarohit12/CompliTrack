import { CheckCircle2 } from "lucide-react"

export function Solution() {
    const features = [
        "Stores all compliance & renewal dates",
        "Shows what’s due & what’s overdue",
        "Sends reminder emails automatically",
        "Helps you finish on time",
    ]

    return (
        <section id="solution" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-8">What CompliTrack Actually Does</h2>

                <div className="max-w-3xl mx-auto bg-card rounded-2xl border shadow-sm p-8 md:p-12">
                    <p className="text-lg mb-8 text-muted-foreground">
                        CompliTrack is a simple tool that gives you centralized visibility and peace of mind.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                                <span className="text-lg font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

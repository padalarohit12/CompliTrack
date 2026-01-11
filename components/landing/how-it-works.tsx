import { UserPlus, CalendarPlus, BellRing } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            icon: <UserPlus className="h-10 w-10 text-primary" />,
            title: "1. Add your business",
            description: "Setup takes less than 2 minutes.",
        },
        {
            icon: <CalendarPlus className="h-10 w-10 text-primary" />,
            title: "2. Add compliance dates",
            description: "Enter GST, license renewals, and other deadlines.",
        },
        {
            icon: <BellRing className="h-10 w-10 text-primary" />,
            title: "3. Get reminders",
            description: "Receive automatic alerts and never miss a deadline.",
        },
    ]

    return (
        <section id="how-it-works" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-12">How It Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 p-6 bg-background rounded-xl shadow-sm border">
                            <div className="p-4 bg-primary/10 rounded-full">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

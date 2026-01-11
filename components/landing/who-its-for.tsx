import { Briefcase, Building2, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WhoItsFor() {
    const segments = [
        {
            title: "For CAs / Consultants",
            icon: <Briefcase className="h-6 w-6" />,
            benefits: [
                "Manage multiple clients easily",
                "No manual follow-ups",
                "No blame for missed deadlines",
                "Centralized visibility",
            ],
        },
        {
            title: "For Business Owners",
            icon: <Building2 className="h-6 w-6" />,
            benefits: [
                "No forgetting renewals",
                "No unnecessary fines",
                "Clear peace of mind",
                "Focus on core business",
            ],
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Who We Build For</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {segments.map((segment, index) => (
                        <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    {segment.icon}
                                </div>
                                <CardTitle className="text-xl">{segment.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {segment.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 text-green-600 shrink-0" />
                                            <span className="text-muted-foreground">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { XCircle, AlertCircle, FileSpreadsheet, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Problem() {
    const problems = [
        {
            icon: <XCircle className="h-8 w-8 text-red-500" />,
            text: "Forgot GST filing date?",
        },
        {
            icon: <AlertCircle className="h-8 w-8 text-red-500" />,
            text: "Paid penalties for renewals?",
        },
        {
            icon: <FileSpreadsheet className="h-8 w-8 text-orange-500" />,
            text: "Tracking deadlines in Excel?",
        },
        {
            icon: <MessageSquare className="h-8 w-8 text-orange-500" />,
            text: "Clients blaming you for missed dates?",
        },
    ]

    return (
        <section id="problem" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Small businesses don't fail compliance because they don't care.</h2>
                    <p className="text-lg text-muted-foreground w-full max-w-2xl mx-auto">
                        They fail because deadlines are scattered, systems are broken, and remembering everything is impossible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {problems.map((problem, index) => (
                        <Card key={index} className="border-none shadow-sm bg-background">
                            <CardContent className="flex flex-col items-center text-center p-6 gap-4">
                                {problem.icon}
                                <p className="font-semibold text-lg">{problem.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xl font-medium text-foreground">
                        This happens to almost every small business and CA.
                    </p>
                </div>
            </div>
        </section>
    )
}

import { Button } from "@/components/ui/button"
import { ComingSoon } from "@/components/ui/coming-soon"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
                <p className="text-lg text-muted-foreground mb-12">One price. All features. No hidden fees.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Monthly */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Monthly</CardTitle>
                            <CardDescription>Flexible for getting started</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-4">₹499<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                            <ul className="space-y-2 text-left">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Unlimited Deadlines</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Email Reminders</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Deadline History</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <ComingSoon trigger={<Button className="w-full">Start Free Trial</Button>} />
                        </CardFooter>
                    </Card>

                    {/* Yearly */}
                    <Card className="flex flex-col border-primary shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                            BEST VALUE
                        </div>
                        <CardHeader>
                            <CardTitle>Yearly</CardTitle>
                            <CardDescription>Commit to compliance</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-4">₹4,999<span className="text-lg font-normal text-muted-foreground">/yr</span></div>
                            <ul className="space-y-2 text-left">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 2 Months Free</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Unlimited Deadlines</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Priority Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <ComingSoon trigger={<Button className="w-full" variant="default">Start Free Trial</Button>} />
                        </CardFooter>
                    </Card>
                </div>

                <div className="mt-12 p-6 bg-background rounded-xl border inline-block mx-auto">
                    <p className="text-xl font-medium text-foreground">
                        "One missed deadline costs more than a year of CompliTrack."
                    </p>
                </div>
            </div>
        </section>
    )
}

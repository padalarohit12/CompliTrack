import { Button } from "@/components/ui/button"
import { ComingSoon } from "@/components/ui/coming-soon"

export function CTA() {
    return (
        <section className="py-20 bg-primary text-primary-foreground text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Stop paying penalties. Start tracking deadlines.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <ComingSoon
                        trigger={<Button size="lg" variant="secondary" className="h-12 px-8 text-base font-semibold">Start Free Trial</Button>}
                    />
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        Talk to Us
                    </Button>
                </div>
            </div>
        </section>
    )
}

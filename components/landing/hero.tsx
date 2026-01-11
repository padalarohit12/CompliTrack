import { Button } from "@/components/ui/button"
import { ComingSoon } from "@/components/ui/coming-soon"
import Link from "next/link"

export function Hero() {
    return (
        <section className="py-24 md:py-32 lg:py-40 text-center px-4">
            <div className="container mx-auto max-w-4xl space-y-8">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl text-balance">
                    Never Miss a Business Compliance Deadline Again
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl text-balance">
                    Track GST, licenses, renewals & get automatic reminders — without the chaos of Excel or WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <ComingSoon
                        trigger={<Button size="lg" className="h-12 px-8 text-base">Start Free (14 Days)</Button>}
                    />
                    <Link href="#how-it-works">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                            See How It Works
                        </Button>
                    </Link>
                </div>
                <div className="pt-8 text-sm text-muted-foreground">
                    <p>Trusted by CAs and Business Owners across India 🇮🇳</p>
                </div>
            </div>
        </section>
    )
}

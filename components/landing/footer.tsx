import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
    return (
        <footer className="py-12 border-t bg-muted/20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 font-bold text-lg">
                    <Shield className="h-5 w-5 fill-muted-foreground text-muted-foreground" />
                    <span className="text-muted-foreground">CompliTrack</span>
                </div>

                <p className="text-sm text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} CompliTrack. All rights reserved.
                </p>

                <div className="flex gap-6 text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    )
}

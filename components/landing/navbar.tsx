"use client"

import Link from "next/link"
import { Menu, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComingSoon } from "@/components/ui/coming-soon"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { name: "Problem", href: "#problem" },
        { name: "Solution", href: "#solution" },
        { name: "Pricing", href: "#pricing" },
    ]

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <Shield className="h-6 w-6 fill-primary text-primary" />
                    <span>CompliTrack</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex gap-6 text-sm font-medium text-muted-foreground">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <ComingSoon trigger={<Button variant="ghost" size="sm">Log in</Button>} />
                        <ComingSoon trigger={<Button size="sm">Start Free Trial</Button>} />
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 mt-6">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-2 mt-4">
                                    <ComingSoon trigger={<Button variant="outline" className="w-full">Log in</Button>} />
                                    <ComingSoon trigger={<Button className="w-full">Start Free Trial</Button>} />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

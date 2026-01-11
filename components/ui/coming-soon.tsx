"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ComingSoonProps {
    trigger?: React.ReactNode
    title?: string
    description?: string
}

export function ComingSoon({
    trigger,
    title = "Coming Soon",
    description = "We are putting the finishing touches on CompliTrack. Join the waitlist to get notified when we launch."
}: ComingSoonProps) {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real app, send to Supabase or Resend
        console.log("Waitlist email:", email)
        setSubmitted(true)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger || <Button>Join Waitlist</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit">Notify Me</Button>
                    </form>
                ) : (
                    <div className="py-6 text-center text-green-600">
                        <p className="font-medium">Thanks! You're on the list.</p>
                        <p className="text-sm text-muted-foreground mt-1">We'll be in touch soon.</p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

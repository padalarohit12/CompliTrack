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
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

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
                    {!submitted && (
                        <div className="mx-auto w-[150px] h-[150px] mb-2">
                            <DotLottieReact
                                src="https://lottie.host/0e1f3fa7-84cd-4804-b082-2d233ec2e7e5/MA7YfOuzIe.lottie"
                                loop
                                autoplay
                            />
                        </div>
                    )}
                    <DialogTitle>{submitted ? "You're on the list!" : title}</DialogTitle>
                    <DialogDescription>
                        {submitted ? "We'll be in touch soon." : description}
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
                    <div className="flex flex-col items-center justify-center py-4">
                        <div className="w-[150px] h-[150px]">
                            <DotLottieReact
                                src="https://lottie.host/8e9aa10a-edd7-4d7b-b675-1ea14f50bce9/GTgfkRFqUP.lottie"
                                loop
                                autoplay
                            />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Watch your inbox for updates.</p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

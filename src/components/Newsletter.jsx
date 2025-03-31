"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-muted py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">Join Our Community</h2>
          <p className="mb-8 text-muted-foreground md:text-lg">
            Subscribe to our newsletter for exclusive offers, style tips, and early access to new collections.
          </p>
          {submitted ? (
            <div className="animate-fade-in flex flex-col items-center justify-center space-y-4 rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium">Thank You for Subscribing!</h3>
              <p className="text-muted-foreground">
                You'll be the first to know about our new arrivals and exclusive offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="sm:w-auto">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}


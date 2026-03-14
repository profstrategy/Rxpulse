"use client"

import { Button } from "@/components/ui/button"
import { ShieldCheck, Microscope } from "lucide-react"

export function CTABanner() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#4A5C7C] to-[#5D729C] p-8 md:p-12">
      {/* Background decorations */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
        <ShieldCheck className="w-32 h-32 text-white" />
      </div>
      <div className="absolute left-8 bottom-4 opacity-10">
        <Microscope className="w-24 h-24 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Need to verify your workflow?
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-6">
          Test the full fulfillment cycle without affecting real stock. The demo
          environment resets every 24 hours.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
        >
          Place Test Order
        </Button>
      </div>
    </div>
  )
}

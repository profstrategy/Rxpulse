"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { DashboardClient } from "@/components/dashboard/dashboard-client"
import { HeartPulse } from "lucide-react"

export default function Home() {
  const [demoMode, setDemoMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <Header
          demoMode={demoMode}
          onDemoModeToggle={() => setDemoMode(!demoMode)}
          onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        {/* Dashboard Content */}
        <main>
          <DashboardClient demoMode={demoMode} />
        </main>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-64 h-full bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile menu content */}
            <div className="p-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">
                  <HeartPulse />
                </div>
                <span className="text-xl font-bold text-gray-900">RXPulse</span>
              </div>
              {/* Navigation items would go here */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

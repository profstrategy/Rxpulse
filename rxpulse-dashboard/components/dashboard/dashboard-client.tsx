"use client"

import { useState, useEffect } from "react"
import { Package, Bell, DollarSign, TrendingUp } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ActivityFeed, Activity } from "@/components/dashboard/activity-feed"
import { StockDistributionChart } from "@/components/dashboard/stock-distribution-chart"
import { CTABanner } from "@/components/dashboard/cta-banner"
import { Badge } from "@/components/ui/badge"
import {
  generateDemoActivity,
  generateInitialActivities,
  initialStats,
  DashboardStats,
} from "@/lib/demo-data"

interface DashboardClientProps {
  demoMode: boolean
}

export function DashboardClient({ demoMode }: DashboardClientProps) {
  const [stats, setStats] = useState<DashboardStats>(initialStats)
  const [activities, setActivities] = useState<Activity[]>([])
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  // Initialize activities
  useEffect(() => {
    setActivities(generateInitialActivities(4))
  }, [])

  // Demo mode: Generate new activities every 3-5 seconds
  useEffect(() => {
    if (!demoMode) return

    const interval = setInterval(
      () => {
        const newActivity = generateDemoActivity()
        setActivities((prev) => [newActivity, ...prev].slice(0, 10))
        setLastUpdate(new Date())
      },
      Math.random() * 2000 + 3000
    ) // Random interval 3-5 seconds

    return () => clearInterval(interval)
  }, [demoMode])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-6 pb-20 lg:pb-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {demoMode && (
                <Badge variant="destructive" className="animate-pulse">
                  LIVE
                </Badge>
              )}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                 Live Inventory Management Dashboard
              </h1>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              {demoMode
                ? "Real-time clinical stock tracking and analytics."
                : "Watch real-time updates as orders are placed across all pharmacy locations."}
            </p>
          </div>
          <Badge variant="outline" className="self-start md:self-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              System Status: Optimal
            </div>
          </Badge>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <StatsCard
            title="Total SKUs"
            value={stats.totalSKUs}
            icon={Package}
            trend={{ value: "+12 week", isPositive: true }}
          />
          <StatsCard
            title="Low Stock"
            value={stats.lowStock}
            icon={Bell}
            trend={{ value: "-3 yesterday", isPositive: true }}
            variant="danger"
          />
          <StatsCard
            title="Today's Revenue"
            value={`$${stats.todayRevenue.toLocaleString()}`}
            icon={DollarSign}
            trend={{ value: "+18%", isPositive: true }}
          />
        </div>

        {/* Stock Distribution & Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StockDistributionChart data={stats.stockDistribution} />
          <ActivityFeed activities={activities} />
        </div>

        {/* CTA Banner */}
        <CTABanner />

        {/* Footer Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>© 2024 RxPulse. Last updated: {lastUpdate.toLocaleTimeString()}.</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-medium">Auto-refresh: Active (Pulsing)</span>
          </div>
        </div>

        {/* Footer Links - Desktop */}
        {/* <div className="hidden md:flex items-center justify-between pt-4 border-t border-gray-200 text-sm">
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Documentation
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Support Center
            </a>
          </div>
          <Badge variant="outline">v2.4.1-stable</Badge>
        </div> */}

        {/* Footer Links - Mobile */}
        {/* <div className="md:hidden pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center gap-4 text-sm mb-4">
            <a href="#" className="text-gray-600 hover:text-primary">
              System Status
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Support
            </a>
          </div>
          <div className="text-center text-xs text-gray-600">
            © 2026 RxPulse
          </div>
        </div> */}
      </div>
    </div>
  )
}

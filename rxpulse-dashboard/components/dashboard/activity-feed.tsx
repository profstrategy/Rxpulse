"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "@/lib/date-utils"

export interface Activity {
  id: string
  type: "success" | "warning" | "danger" | "info"
  title: string
  description: string
  timestamp: Date
}

interface ActivityFeedProps {
  activities: Activity[]
  title?: string
  showViewAll?: boolean
  onViewAll?: () => void
}

export function ActivityFeed({
  activities,
  title = "Live Activity Feed",
  showViewAll = true,
  onViewAll,
}: ActivityFeedProps) {
  const getIndicatorColor = (type: Activity["type"]) => {
    switch (type) {
      case "success":
        return "bg-success"
      case "warning":
        return "bg-warning"
      case "danger":
        return "bg-danger animate-pulse-slow"
      case "info":
        return "bg-primary"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-danger animate-pulse" />
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
          {showViewAll && onViewAll && (
            <button
              onClick={onViewAll}
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              View History
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.length === 0 ? (
          <div className="text-center py-8 text-gray-500 text-sm">
            No recent activity
          </div>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                  getIndicatorColor(activity.type)
                )}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600 mt-0.5">
                  {activity.description}
                </p>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap mt-1">
                {formatDistanceToNow(activity.timestamp)}
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}

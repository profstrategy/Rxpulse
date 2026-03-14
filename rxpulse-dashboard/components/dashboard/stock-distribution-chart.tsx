"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { MoreVertical } from "lucide-react"

interface StockDistributionProps {
  data: {
    healthy: number
    low: number
    critical: number
  }
}

export function StockDistributionChart({ data }: StockDistributionProps) {
  const chartData = [
    { name: "Healthy", value: data.healthy, color: "#10B981" },
    { name: "Low", value: data.low, color: "#F59E0B" },
    { name: "Critical", value: data.critical, color: "#EF4444" },
  ]

  const total = data.healthy + data.low + data.critical
  const healthyPercent = Math.round((data.healthy / total) * 100)

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Stock Distribution</CardTitle>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-gray-900">{healthyPercent}%</div>
              <div className="text-sm text-gray-600">Availability</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center mt-6">
            {chartData.map((item) => {
              const percentage = Math.round((item.value / total) * 100)
              return (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {percentage}%
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

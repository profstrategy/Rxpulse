import { Activity } from "@/components/dashboard/activity-feed"

export interface DashboardStats {
  totalSKUs: number
  lowStock: number
  todayRevenue: number
  stockDistribution: {
    healthy: number
    low: number
    critical: number
  }
}

const drugNames = [
  "Ibuprofen",
  "Amoxicillin",
  "Lisinopril",
  "Metformin",
  "Atorvastatin",
  "Amlodipine",
  "Omeprazole",
  "Losartan",
  "Albuterol",
  "Gabapentin",
]

const activityTypes = [
  {
    type: "success" as const,
    templates: [
      (drug: string) => ({
        title: `${drug} stock update`,
        description: `+500 units received at Warehouse A`,
      }),
      (drug: string) => ({
        title: `Order success`,
        description: `Bulk order #TX-${Math.floor(Math.random() * 10000)} confirmed`,
      }),
      (drug: string) => ({
        title: `Inventory sync complete`,
        description: `Main database updated successfully`,
      }),
    ],
  },
  {
    type: "warning" as const,
    templates: [
      (drug: string) => ({
        title: `${drug} alert`,
        description: `Critical low level reached (5 units remaining)`,
      }),
    ],
  },
  {
    type: "danger" as const,
    templates: [
      (drug: string) => ({
        title: `${drug} critical`,
        description: `Stock depleted - immediate reorder required`,
      }),
    ],
  },
]

export function generateDemoActivity(): Activity {
  const activityType = activityTypes[Math.floor(Math.random() * activityTypes.length)]
  const template = activityType.templates[Math.floor(Math.random() * activityType.templates.length)]
  const drug = drugNames[Math.floor(Math.random() * drugNames.length)]
  const content = template(drug)

  return {
    id: `activity-${Date.now()}-${Math.random()}`,
    type: activityType.type,
    title: content.title,
    description: content.description,
    timestamp: new Date(),
  }
}

export function generateInitialActivities(count: number = 10): Activity[] {
  const activities: Activity[] = []
  const now = Date.now()

  for (let i = 0; i < count; i++) {
    const activity = generateDemoActivity()
    // Stagger timestamps
    activity.timestamp = new Date(now - i * 60000 * Math.random() * 5)
    activities.push(activity)
  }

  return activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}

export const initialStats: DashboardStats = {
  totalSKUs: 487,
  lowStock: 12,
  todayRevenue: 3456,
  stockDistribution: {
    healthy: 399,
    low: 76,
    critical: 12,
  },
}

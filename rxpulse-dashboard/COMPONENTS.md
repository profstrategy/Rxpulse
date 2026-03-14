# 📚 Component Catalog - RxPulse Dashboard

Complete reference guide for all reusable components.

---

## Table of Contents
1. [UI Components](#ui-components)
2. [Dashboard Components](#dashboard-components)
3. [Layout Components](#layout-components)
4. [Utilities](#utilities)

---

## UI Components

### Button

**Location**: `components/ui/button.tsx`

**Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes**: `default`, `sm`, `lg`, `icon`

**Usage Examples**:
```tsx
// Default primary button
<Button>Click me</Button>

// Outline variant
<Button variant="outline">Cancel</Button>

// Danger button
<Button variant="destructive">Delete</Button>

// Small button
<Button size="sm">Small</Button>

// With icon
<Button>
  <Plus className="w-4 h-4 mr-2" />
  Add Item
</Button>

// As link
<Button asChild>
  <Link href="/orders">View Orders</Link>
</Button>
```

**Props**:
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
  children: React.ReactNode
}
```

---

### Card

**Location**: `components/ui/card.tsx`

**Components**: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

**Usage Examples**:
```tsx
// Basic card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
</Card>

// With footer
<Card>
  <CardHeader>
    <CardTitle>Settings</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Form fields */}
  </CardContent>
  <CardFooter>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>

// Custom styling
<Card className="hover:shadow-lg transition-shadow">
  {/* Content */}
</Card>
```

**Props**:
```typescript
// All components accept standard HTML div props
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}
```

---

### Badge

**Location**: `components/ui/badge.tsx`

**Variants**: `default`, `secondary`, `destructive`, `outline`

**Usage Examples**:
```tsx
// Status badges
<Badge>Active</Badge>
<Badge variant="destructive">Critical</Badge>
<Badge variant="outline">Pending</Badge>

// With custom content
<Badge variant="secondary">
  <Bell className="w-3 h-3 mr-1" />
  3 Alerts
</Badge>

// Custom colors
<Badge className="bg-success text-white">
  Healthy
</Badge>
```

**Props**:
```typescript
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  className?: string
  children: React.ReactNode
}
```

---

## Dashboard Components

### StatsCard

**Location**: `components/dashboard/stats-card.tsx`

**Purpose**: Display key metrics with icons and trends

**Usage Examples**:
```tsx
// Basic metric
<StatsCard
  title="Total SKUs"
  value={487}
  icon={Package}
/>

// With trend (positive)
<StatsCard
  title="Today's Revenue"
  value="$3,456"
  icon={DollarSign}
  trend={{ value: "+18%", isPositive: true }}
/>

// With trend (negative - shown as red)
<StatsCard
  title="Failed Orders"
  value={12}
  icon={AlertCircle}
  trend={{ value: "-3 yesterday", isPositive: false }}
/>

// Warning variant
<StatsCard
  title="Low Stock"
  value={12}
  icon={Bell}
  variant="warning"
/>

// Danger variant
<StatsCard
  title="Critical Items"
  value={3}
  icon={AlertTriangle}
  variant="danger"
/>
```

**Props**:
```typescript
interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
  variant?: 'default' | 'warning' | 'danger'
  className?: string
}
```

**Visual Variants**:
- `default`: Blue icon background
- `warning`: Yellow icon background
- `danger`: Red icon background (with pulsing animation)

---

### ActivityFeed

**Location**: `components/dashboard/activity-feed.tsx`

**Purpose**: Display real-time events and updates

**Usage Examples**:
```tsx
// Basic feed
<ActivityFeed
  activities={[
    {
      id: "1",
      type: "success",
      title: "Ibuprofen stock update",
      description: "+500 units received at Warehouse A",
      timestamp: new Date()
    },
    {
      id: "2",
      type: "danger",
      title: "Amoxicillin alert",
      description: "Critical low level (5 units remaining)",
      timestamp: new Date(Date.now() - 300000) // 5 mins ago
    }
  ]}
/>

// Without view all button
<ActivityFeed
  activities={activities}
  showViewAll={false}
/>

// Custom title
<ActivityFeed
  activities={activities}
  title="Recent Updates"
/>

// With callback
<ActivityFeed
  activities={activities}
  onViewAll={() => router.push('/alerts')}
/>
```

**Props**:
```typescript
interface Activity {
  id: string
  type: 'success' | 'warning' | 'danger' | 'info'
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
```

**Activity Types**:
- `success`: Green dot (stock updates, confirmations)
- `warning`: Yellow dot (low stock warnings)
- `danger`: Red dot with pulse (critical alerts)
- `info`: Blue dot (general information)

---

### StockDistributionChart

**Location**: `components/dashboard/stock-distribution-chart.tsx`

**Purpose**: Visualize stock health distribution

**Usage Examples**:
```tsx
// Basic chart
<StockDistributionChart
  data={{
    healthy: 399,
    low: 76,
    critical: 12
  }}
/>

// Dynamic data
const [stats, setStats] = useState({
  healthy: 350,
  low: 100,
  critical: 37
})

<StockDistributionChart data={stats} />
```

**Props**:
```typescript
interface StockDistributionProps {
  data: {
    healthy: number
    low: number
    critical: number
  }
}
```

**Features**:
- Interactive donut chart (Recharts)
- Center percentage display (healthy %)
- Color-coded segments
- Legend with percentages
- Responsive sizing

---

### CTABanner

**Location**: `components/dashboard/cta-banner.tsx`

**Purpose**: Call-to-action section for workflow testing

**Usage Example**:
```tsx
<CTABanner />

// The component is self-contained and includes:
// - Gradient background
// - Icon decorations
// - Title and description
// - CTA button
```

**Customization**:
```tsx
// To modify the button action
<CTABanner />

// Then edit the component directly to change:
// - Button text
// - Button onClick handler
// - Title/description text
// - Background gradient colors
```

---

## Layout Components

### Sidebar

**Location**: `components/layout/sidebar.tsx`

**Purpose**: Desktop navigation sidebar

**Usage Example**:
```tsx
<Sidebar />

// The sidebar includes:
// - Logo and branding
// - Navigation links with icons
// - Active state highlighting
// - Badge for alert count
// - User profile section
```

**Navigation Items**:
```typescript
const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Orders", href: "/orders", icon: ShoppingCart },
  { name: "Alerts", href: "/alerts", icon: Bell, badge: 3 },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
]
```

**Customization**:
- Add/remove navigation items in the `navigation` array
- Change icons (from `lucide-react`)
- Modify colors in Tailwind classes
- Update logo/branding

---

### Header

**Location**: `components/layout/header.tsx`

**Purpose**: Top navigation bar with search and controls

**Usage Example**:
```tsx
const [demoMode, setDemoMode] = useState(false)

<Header
  demoMode={demoMode}
  onDemoModeToggle={() => setDemoMode(!demoMode)}
  onMenuClick={() => setMobileMenuOpen(true)}
/>
```

**Props**:
```typescript
interface HeaderProps {
  demoMode: boolean
  onDemoModeToggle: () => void
  onMenuClick?: () => void
}
```

**Features**:
- Search bar (desktop only)
- Demo mode toggle
- Sign up button
- Mobile menu button
- User avatar (mobile)

---

### MobileNav

**Location**: `components/layout/mobile-nav.tsx`

**Purpose**: Bottom navigation for mobile devices

**Usage Example**:
```tsx
<MobileNav />

// Automatically shows on mobile (<768px)
// Hidden on desktop (>1024px)
```

**Navigation Items**:
```typescript
const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Activity", href: "/alerts", icon: Bell },
  { name: "Orders", href: "/orders", icon: ShoppingCart },
]
```

---

## Utilities

### cn() - ClassName Utility

**Location**: `lib/utils.ts`

**Purpose**: Merge Tailwind classes safely

**Usage Examples**:
```tsx
import { cn } from '@/lib/utils'

// Merge classes
<div className={cn("text-sm", "font-bold", className)}>

// Conditional classes
<div className={cn(
  "px-4 py-2",
  isActive && "bg-primary text-white",
  !isActive && "bg-gray-100 text-gray-600"
)}>

// Override classes
<Button className={cn("bg-red-500", className)} />
```

---

### formatDistanceToNow()

**Location**: `lib/date-utils.ts`

**Purpose**: Format dates as relative time

**Usage Examples**:
```tsx
import { formatDistanceToNow } from '@/lib/date-utils'

const timestamp = new Date(Date.now() - 120000) // 2 minutes ago

formatDistanceToNow(timestamp) // "2m ago"
formatDistanceToNow(new Date(Date.now() - 3600000)) // "1h ago"
formatDistanceToNow(new Date(Date.now() - 86400000)) // "1d ago"
```

**Output Format**:
- Seconds: "30s ago"
- Minutes: "5m ago"
- Hours: "2h ago"
- Days: "3d ago"

---

### Demo Data Generator

**Location**: `lib/demo-data.ts`

**Purpose**: Generate realistic demo data

**Usage Examples**:
```tsx
import {
  generateDemoActivity,
  generateInitialActivities,
  initialStats
} from '@/lib/demo-data'

// Generate single activity
const activity = generateDemoActivity()

// Generate multiple activities
const activities = generateInitialActivities(10)

// Use initial stats
const [stats, setStats] = useState(initialStats)
```

**Functions**:
```typescript
// Generate one random activity
function generateDemoActivity(): Activity

// Generate N activities with staggered timestamps
function generateInitialActivities(count: number): Activity[]

// Initial dashboard stats
const initialStats: DashboardStats
```

---

## Responsive Design Patterns

### Grid Layouts
```tsx
// 1 column mobile, 2 columns tablet, 3 columns desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id} />)}
</div>

// Stats cards row
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <StatsCard {...} />
  <StatsCard {...} />
  <StatsCard {...} />
</div>
```

### Show/Hide on Different Screens
```tsx
// Show only on mobile
<div className="lg:hidden">Mobile content</div>

// Show only on desktop
<div className="hidden lg:block">Desktop content</div>

// Show on tablet and up
<div className="hidden md:block">Tablet+ content</div>
```

### Responsive Text
```tsx
// Small on mobile, larger on desktop
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Responsive Title
</h1>

// Different padding
<div className="p-4 md:p-6 lg:p-8">
  Content
</div>
```

---

## Animation Patterns

### Hover Effects
```tsx
// Shadow lift on hover
<Card className="hover:shadow-lg transition-shadow">

// Scale on hover
<Button className="hover:scale-105 transition-transform">

// Color change
<div className="hover:bg-gray-100 transition-colors">
```

### Pulse Animation
```tsx
// For critical items
<div className="animate-pulse-slow">
  Critical Alert
</div>

// For live indicators
<div className="w-2 h-2 bg-success rounded-full animate-pulse" />
```

### Fade In
```tsx
// Activity feed items
<div className="animate-in fade-in slide-in-from-top">
  New Activity
</div>
```

---

## Best Practices

### Component Composition
```tsx
// Good: Composable
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <StatsCard {...} />
  </CardContent>
</Card>

// Bad: Monolithic
<CustomCardWithEverything />
```

### Props vs. Children
```tsx
// Use children for flexible content
<Card>
  {customContent}
</Card>

// Use props for configuration
<StatsCard
  title="Revenue"
  value={1000}
  variant="success"
/>
```

### Type Safety
```tsx
// Always define prop types
interface MyComponentProps {
  title: string
  count: number
  onAction?: () => void
}

export function MyComponent({ title, count, onAction }: MyComponentProps) {
  // Implementation
}
```

---

## Common Patterns

### Loading State
```tsx
const [isLoading, setIsLoading] = useState(true)

{isLoading ? (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4" />
  </div>
) : (
  <ActivityFeed activities={activities} />
)}
```

### Empty State
```tsx
{items.length === 0 ? (
  <div className="text-center py-12 text-gray-500">
    <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
    <p className="text-lg font-medium">No items found</p>
    <p className="text-sm">Add your first item to get started</p>
  </div>
) : (
  <div className="grid gap-4">
    {items.map(item => <ItemCard key={item.id} {...item} />)}
  </div>
)}
```

### Error State
```tsx
{error ? (
  <div className="bg-danger-light border border-danger text-danger p-4 rounded-lg">
    <p className="font-semibold">Error loading data</p>
    <p className="text-sm">{error.message}</p>
    <Button onClick={retry} size="sm" className="mt-2">
      Try Again
    </Button>
  </div>
) : (
  <Content />
)}
```

---

This component catalog provides everything you need to build consistent, maintainable UIs with RxPulse components!

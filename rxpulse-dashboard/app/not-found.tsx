import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft, HeartPulse } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white text-2xl">
            <HeartPulse />
          </div>
          <span className="text-2xl font-bold text-gray-900">RXPulse</span>
        </div>

        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-[120px] font-bold text-primary leading-none">
            404
          </div>
          <div className="text-xl font-semibold text-gray-900 mt-4">
            Page Not Found
          </div>
          <p className="text-gray-600 mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Search Icon Decoration */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <Link href="/" className="text-primary hover:underline font-medium">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
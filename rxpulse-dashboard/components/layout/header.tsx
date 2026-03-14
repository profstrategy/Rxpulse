"use client"

import { Search, Menu, User, HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface HeaderProps {
  demoMode: boolean
  onDemoModeToggle: () => void
  onMenuClick?: () => void
}

export function Header({ demoMode, onDemoModeToggle, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4 h-16 px-4 lg:px-8">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
            <HeartPulse />
          </div>
          <span className="text-lg font-bold text-gray-900">RXPulse</span>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex-1" /> {/* Spacer */}

        {/* Demo Mode Toggle */}
        <div className="flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={demoMode}
              onChange={onDemoModeToggle}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 whitespace-nowrap">
              Demo Mode
            </span>
          </label>
        </div>

        {/* Sign Up Button */}
        {/* <Button size="sm" className="hidden sm:inline-flex">
          Sign Up
        </Button> */}

        {/* User Avatar (mobile) */}
        <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

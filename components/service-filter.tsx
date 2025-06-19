"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface ServiceFilterProps {
  categories: string[]
  onFilterChange: (category: string, searchTerm: string) => void
  serviceTitles?: string[]
}

export function ServiceFilter({ categories, onFilterChange, serviceTitles = [] }: ServiceFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const filteredSuggestions =
    searchTerm.length > 0
      ? serviceTitles.filter((title) =>
          title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : []

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onFilterChange(category, searchTerm)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    onFilterChange(activeCategory, e.target.value)
    setShowSuggestions(true)
    setHighlightedIndex(-1)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion)
    onFilterChange(activeCategory, suggestion)
    setShowSuggestions(false)
  }

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100) // allow click
  }

  const handleInputFocus = () => {
    if (filteredSuggestions.length > 0) setShowSuggestions(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || filteredSuggestions.length === 0) return
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => (prev + 1) % filteredSuggestions.length)
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length)
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      handleSuggestionClick(filteredSuggestions[highlightedIndex])
    }
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search services..."
          className="pl-10"
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-20 max-h-48 overflow-auto">
            {filteredSuggestions.map((suggestion, idx) => (
              <li
                key={suggestion}
                className={`px-4 py-2 cursor-pointer ${idx === highlightedIndex ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
                onMouseDown={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setHighlightedIndex(idx)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeCategory === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange("All")}
          className={activeCategory === "All" ? "bg-[#00A3E0] hover:bg-[#0089BD]" : ""}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category)}
            className={activeCategory === category ? "bg-[#00A3E0] hover:bg-[#0089BD]" : ""}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaSearch } from "react-icons/fa"
import type React from "react" // Added import for React

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a career roadmap..."
          className="w-full px-4 py-2 rounded-full border-2 border-primary focus:outline-none focus:border-accent transition-colors duration-300 pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full hover:bg-accent transition-colors duration-300"
        >
          Search
        </motion.button>
      </div>
    </motion.form>
  )
}

export default SearchBar


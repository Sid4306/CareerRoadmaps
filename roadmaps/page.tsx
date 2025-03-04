"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SearchBar from "../components/SearchBar"
import RoadmapCard from "../components/RoadmapCard"
import Fuse from "fuse.js"

const roadmaps = [
  {
    title: "Software Developer",
    description: "Learn to build web and mobile applications",
    slug: "software-developer",
    category: "Technology",
  },
  {
    title: "Data Scientist",
    description: "Master data analysis and machine learning",
    slug: "data-scientist",
    category: "Technology",
  },
  {
    title: "UX Designer",
    description: "Create intuitive and beautiful user experiences",
    slug: "ux-designer",
    category: "Design",
  },
  {
    title: "Digital Marketer",
    description: "Drive growth through digital channels",
    slug: "digital-marketer",
    category: "Marketing",
  },
  {
    title: "Product Manager",
    description: "Lead product development and strategy",
    slug: "product-manager",
    category: "Management",
  },
  {
    title: "Cybersecurity Specialist",
    description: "Protect systems and networks from threats",
    slug: "cybersecurity-specialist",
    category: "Technology",
  },
  {
    title: "Cloud Architect",
    description: "Design and implement cloud computing strategies",
    slug: "cloud-architect",
    category: "Technology",
  },
  {
    title: "AI Engineer",
    description: "Develop artificial intelligence solutions",
    slug: "ai-engineer",
    category: "Technology",
  },
  {
    title: "DevOps Engineer",
    description: "Streamline development and operations processes",
    slug: "devops-engineer",
    category: "Technology",
  },
  {
    title: "Blockchain Developer",
    description: "Build decentralized applications and systems",
    slug: "blockchain-developer",
    category: "Technology",
  },
]

const fuse = new Fuse(roadmaps, {
  keys: ["title", "description", "category"],
  threshold: 0.3,
})

const categories = Array.from(new Set(roadmaps.map((roadmap) => roadmap.category)))

export default function RoadmapsPage() {
  const [searchResults, setSearchResults] = useState(roadmaps)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleSearch = (query: string) => {
    if (query.trim() === "") {
      setSearchResults(roadmaps)
    } else {
      const results = fuse.search(query)
      setSearchResults(results.map((result) => result.item))
    }
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setSearchResults(roadmaps)
    } else {
      setSearchResults(roadmaps.filter((roadmap) => roadmap.category === category))
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-display font-bold text-center mb-12"
      >
        Explore Career Roadmaps
      </motion.h1>
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "All" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.map((roadmap, index) => (
          <motion.div
            key={roadmap.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <RoadmapCard title={roadmap.title} description={roadmap.description} slug={roadmap.slug} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}


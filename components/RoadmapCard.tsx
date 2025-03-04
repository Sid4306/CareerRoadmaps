"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type React from "react"

interface RoadmapCardProps {
  title: string
  description: string
  slug: string
  category: string
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ title, description, slug, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift"
    >
      <div className="p-6">
        <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-accent rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={`/roadmap/${slug}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-accent transition-colors duration-300"
          >
            View Roadmap
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default RoadmapCard


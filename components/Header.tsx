"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaRocket } from "react-icons/fa"

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center space-x-2">
              <FaRocket className="text-primary text-2xl" />
              <span className="text-2xl font-display font-bold text-primary">CareerRoadmaps</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-x-4"
          >
            <Link href="/" className="fancy-underline text-gray-800 hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link
              href="/roadmaps"
              className="fancy-underline text-gray-800 hover:text-primary transition-colors duration-300"
            >
              Roadmaps
            </Link>
            <Link
              href="/about"
              className="fancy-underline text-gray-800 hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

export default Header


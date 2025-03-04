"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-display font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-black"
      >
        Discover Your Career Path
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-center text-gray-600 mb-12"
      >
        Explore step-by-step roadmaps to achieve your professional goals
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center mb-16"
      >
        <Link href="/roadmaps">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent transition-colors duration-300 shadow-lg"
          >
            Explore Roadmaps
          </motion.button>
        </Link>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Why CareerRoadmaps?</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Comprehensive step-by-step guides
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Curated learning resources
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Project ideas to build your portfolio
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Industry insights and trends
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative h-64 md:h-auto"
        >
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Career growth illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Ready to start your journey?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Explore our roadmaps and take the first step towards your dream career.
        </p>
        <Link href="/roadmaps">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}


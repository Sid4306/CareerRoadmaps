"use client"

import { motion } from "framer-motion"
import { FaRocket, FaLightbulb, FaUsers } from "react-icons/fa"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-display font-bold text-center mb-12"
      >
        About CareerLaunch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-center text-gray-600 mb-12"
      >
        Empowering individuals to achieve their career goals through comprehensive roadmaps and resources
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6 text-center"
        >
          <FaRocket className="text-5xl text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To provide clear, actionable career roadmaps that guide individuals towards their professional aspirations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-6 text-center"
        >
          <FaLightbulb className="text-5xl text-secondary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
          <p className="text-gray-600">
            We curate step-by-step guides, combining industry insights with practical resources to illuminate your
            career path.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 text-center"
        >
          <FaUsers className="text-5xl text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Community</h2>
          <p className="text-gray-600">
            Join a supportive network of like-minded individuals all working towards their career goals.
          </p>
        </motion.div>
      </div>
    </div>
  )
}


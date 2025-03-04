"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{ x: mousePosition.x - 5, y: mousePosition.y - 5 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="custom-cursor-trail"
        animate={{ x: mousePosition.x - 15, y: mousePosition.y - 15 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: #4F46E5;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
        }
        .custom-cursor-trail {
          position: fixed;
          top: 0;
          left: 0;
          width: 30px;
          height: 30px;
          border: 2px solid #4F46E5;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
        }
      `}</style>
    </>
  )
}

export default CustomCursor



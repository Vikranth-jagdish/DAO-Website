"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamProps {
  className?: string;
  delay?: number;
  duration?: number;
  width?: string;
  height?: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
}

const BeamShooter = ({
  className,
  delay = 0,
  duration = 2,
  width: _width = "100%", // eslint-disable-line @typescript-eslint/no-unused-vars
  height = "4px",
  fromColor = "#1FB6FF", // DAO Cyan
  viaColor = "#A76EFF",   // DAO Purple
  toColor = "#FF3D8F",    // DAO Magenta
}: BeamProps) => {
  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center",
        className
      )}
    >
      {/* Main beam container */}
      <div className="relative w-full h-2">
        {/* Base beam track */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accentCyan/10 to-transparent rounded-full"
          style={{ height }}
        />
        
        {/* Permanent beam line that stays */}
        <motion.div
          className="absolute top-0 left-0 rounded-full"
          style={{
            height,
            width: "0%",
            background: `linear-gradient(90deg, ${fromColor} 0%, ${viaColor} 50%, ${toColor} 100%)`,
            boxShadow: `0 0 10px ${viaColor}40`,
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: duration,
            delay,
            ease: "easeOut",
          }}
        />
        
        {/* Animated beam */}
        <motion.div
          className="absolute top-0 left-0 rounded-full"
          style={{
            height,
            width: "200px",
            background: `linear-gradient(90deg, transparent 0%, ${fromColor} 20%, ${viaColor} 50%, ${toColor} 80%, transparent 100%)`,
            boxShadow: `0 0 20px ${viaColor}40, 0 0 40px ${fromColor}20`,
          }}
          initial={{ x: "-200px", opacity: 0 }}
          animate={{ 
            x: "calc(100% + 200px)", 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: duration * 0.5,
            delay: delay + 0.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3,
            opacity: {
              times: [0, 0.1, 0.9, 1],
              duration: duration * 0.5,
            }
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full blur-sm"
          style={{
            height: "8px",
            width: "150px",
            background: `linear-gradient(90deg, transparent 0%, ${fromColor}60 30%, ${viaColor}80 50%, ${toColor}60 70%, transparent 100%)`,
          }}
          initial={{ x: "-150px", opacity: 0 }}
          animate={{ 
            x: "calc(100% + 150px)", 
            opacity: [0, 0.8, 0.8, 0] 
          }}
          transition={{
            duration,
            delay: delay + 0.1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4,
            opacity: {
              times: [0, 0.2, 0.8, 1],
              duration,
            }
          }}
        />
        
        {/* Outer glow */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full blur-md"
          style={{
            height: "16px",
            width: "100px",
            background: `linear-gradient(90deg, transparent 0%, ${fromColor}30 40%, ${viaColor}40 50%, ${toColor}30 60%, transparent 100%)`,
          }}
          initial={{ x: "-100px", opacity: 0 }}
          animate={{ 
            x: "calc(100% + 100px)", 
            opacity: [0, 0.6, 0.6, 0] 
          }}
          transition={{
            duration,
            delay: delay + 0.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4,
            opacity: {
              times: [0, 0.3, 0.7, 1],
              duration,
            }
          }}
        />
      </div>
      
      {/* Particle trail effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-0 w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? fromColor : toColor,
              boxShadow: `0 0 4px ${i % 2 === 0 ? fromColor : toColor}`,
            }}
            initial={{ 
              x: "-10px", 
              y: "50%",
              opacity: 0,
              scale: 0 
            }}
            animate={{ 
              x: "calc(100% + 10px)", 
              y: ["50%", `${50 + (Math.random() - 0.5) * 4}%`, "50%"],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: duration * 0.8,
              delay: delay + i * 0.1,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BeamShooter; 
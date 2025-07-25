"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl  h-16 w-40 p-[1px] overflow-hidden ",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-100 bg-white rounded-full shadow-[0_0_30px_#FFFFFF,0_0_60px_#1FB6FF,0_0_90px_#1FB6FF] filter brightness-150",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pathRef = useRef<any>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    try {
      const element = pathRef.current;
      if (element && element.getTotalLength && typeof element.getTotalLength === 'function') {
        const length = element.getTotalLength?.() || 0;
        if (length && length > 0) {
          const pxPerMillisecond = length / duration;
          progress.set((time * pxPerMillisecond) % length);
        }
      }
    } catch (error: unknown) {
      // Silently handle the error when element is not rendered
      if (process.env.NODE_ENV === 'development') {
        console.warn('MovingBorder: SVG element not ready for getTotalLength()', error);
      }
    }
  });

  const x = useTransform(
    progress,
    (val) => {
      try {
        return pathRef.current?.getPointAtLength?.(val)?.x || 0;
      } catch {
        return 0;
      }
    }
  );
  const y = useTransform(
    progress,
    (val) => {
      try {
        return pathRef.current?.getPointAtLength?.(val)?.y || 0;
      } catch {
        return 0;
      }
    }
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}; 
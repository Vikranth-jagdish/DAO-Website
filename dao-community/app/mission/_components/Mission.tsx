"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";

const staggerContainer = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textReveal = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

const imageParallax = {
  offscreen: { opacity: 0, scale: 0.95 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

export default function MissionVisionPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mb-24 text-center"
      >
        <motion.div variants={textReveal} className="overflow-hidden">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Our <span className="text-primary">Vision</span> &{" "}
            <span className="text-primary">Mission</span>
          </h1>
        </motion.div>
        <motion.div variants={textReveal} className="overflow-hidden">
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Guiding principles that drive The DAO Community forward
          </p>
        </motion.div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mb-32 grid gap-16 lg:grid-cols-2 lg:items-center"
      >
        {/* Floating decorative element */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -left-32 -top-32 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          variants={staggerContainer}
          className="relative space-y-8 lg:pr-16"
        >
          <motion.div variants={textReveal}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Vision
            </h2>
          </motion.div>
          <motion.div variants={textReveal}>
            <Separator className="w-24 bg-primary" />
          </motion.div>
          <motion.p
            variants={textReveal}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            We envision a future where every student understands the power of
            blockchain and Web3. Our goal is to cultivate a passionate network
            of learners ready to shape the future.
          </motion.p>
          <motion.p
            variants={textReveal}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            Through immersive events and hands-on experiences, we bridge the gap
            between curiosity and innovation—empowering students to explore the
            decentralized world through collaboration, creativity, and
            community.
          </motion.p>
        </motion.div>

        {/* Image with proper aspect ratio */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={imageParallax}
          className="relative flex aspect-square w-full items-center justify-center overflow-hidden"
        >
          <div className="relative h-full w-full">
            <Image
              src="/blockchain.png"
              alt="Vision illustration"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-background/80" />
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mb-32 grid gap-16 lg:grid-cols-2 lg:items-center"
      >
        {/* Floating decorative element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -right-32 -bottom-32 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />

        {/* Image with proper aspect ratio */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={imageParallax}
          className="relative flex aspect-square w-full items-center justify-center overflow-hidden lg:order-first"
        >
          <div className="relative h-full w-full">
            <Image
              src="/blockchain3.png"
              alt="Mission illustration"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-background/80" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="relative space-y-8 lg:pl-16"
        >
          <motion.div variants={textReveal}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
          </motion.div>
          <motion.div variants={textReveal}>
            <Separator className="w-24 bg-primary" />
          </motion.div>
          <motion.p
            variants={textReveal}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            Our mission is to make blockchain education accessible and exciting
            for everyone. We organize interactive workshops, seminars, and host
            one of the biggest Web3 events in our college.
          </motion.p>
          <motion.p
            variants={textReveal}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            But we go beyond tech — by being part of the club, you&apos;ll also
            learn how to lead and organize events, building skills in teamwork,
            communication, and leadership. Step into Web3 and grow with us.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Closing CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-xl border bg-gradient-to-br from-background to-muted p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to join the decentralized revolution?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Become part of a community that&apos;s shaping the future of technology.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
}

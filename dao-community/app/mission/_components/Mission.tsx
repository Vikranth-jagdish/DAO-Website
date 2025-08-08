"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";

const staggerContainer = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.2,
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

const fadeIn = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const imageParallax = {
  offscreen: { opacity: 0, scale: 0.9, y: 20 },
  onscreen: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

const floatAnimation = {
  offscreen: { y: 20 },
  onscreen: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function MissionVisionPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 mt-14 sm:mt-16">
      {/* Hero Section */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mb-16 sm:mb-20 md:mb-24 text-center"
      >
        <motion.div variants={textReveal} className="overflow-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our <span className="text-primary">Vision</span> &{" "}
            <span className="text-primary">Mission</span>
          </h1>
        </motion.div>
        <motion.div variants={textReveal} className="overflow-hidden">
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Guiding principles that drive The DAO Community forward
          </p>
        </motion.div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        className="relative mb-20 sm:mb-24 lg:mb-32 grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -left-32 -top-32 -z-10 hidden h-64 w-64 rounded-full bg-primary/10 blur-3xl lg:block"
        />

        <motion.div
          variants={staggerContainer}
          className="relative space-y-4 sm:space-y-6 md:space-y-8 lg:pr-8 xl:pr-16"
        >
          <motion.div variants={textReveal}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Our Vision
            </h2>
          </motion.div>
          <motion.div variants={textReveal}>
            <Separator className="w-16 sm:w-24 bg-primary" />
          </motion.div>
          <motion.p
            variants={textReveal}
            className="text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            We envision a future where every student understands the power of
            blockchain and Web3. Our goal is to cultivate a passionate network
            of learners ready to shape the future.
          </motion.p>
          <motion.p
            variants={textReveal}
            className="text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            Through immersive events and hands-on experiences, we bridge the gap
            between curiosity and innovation—empowering students to explore the
            decentralized world through collaboration, creativity, and
            community.
          </motion.p>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={imageParallax}
          className="relative flex w-full items-center justify-center overflow-hidden rounded-xl h-64 sm:h-80 md:h-96 lg:h-auto lg:aspect-square "
        >
          <motion.div
            variants={floatAnimation}
            className="relative h-full w-full"
          >
            <Image
              src="/blockchain.png"
              alt="Vision illustration"
              fill
              className="object-contain p-4 sm:p-6"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-background/80" />
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        className="relative mb-20 sm:mb-24 lg:mb-32 grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -right-32 -bottom-32 -z-10 hidden h-64 w-64 rounded-full bg-primary/10 blur-3xl lg:block"
        />

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={imageParallax}
          className="relative flex w-full items-center justify-center overflow-hidden rounded-xl lg:order-first h-64 sm:h-80 md:h-96 lg:h-auto lg:aspect-square"
        >
          <motion.div
            variants={floatAnimation}
            className="relative h-full w-full"
          >
            <Image
              src="/blockchain3.png"
              alt="Mission illustration"
              fill
              className="object-contain p-4 sm:p-6"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </motion.div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-background/80" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="relative space-y-4 sm:space-y-6 md:space-y-8 lg:pl-8 xl:pl-16"
        >
          <motion.div variants={textReveal}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Our Mission
            </h2>
          </motion.div>
          <motion.div variants={textReveal}>
            <Separator className="w-16 sm:w-24 bg-primary" />
          </motion.div>
          <motion.p
            variants={textReveal}
            className="text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            Our mission is to make blockchain education accessible and exciting
            for everyone. We organize interactive workshops, seminars, and host
            one of the biggest Web3 events in our college.
          </motion.p>
          <motion.p
            variants={textReveal}
            className="text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            But we go beyond tech — by being part of the club, you&apos;ll also
            learn how to lead and organize events, building skills in teamwork,
            communication, and leadership. Step into Web3 and grow with us.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Closing CTA */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
        className="mx-auto max-w-3xl lg:max-w-4xl px-4 sm:px-6"
      >
        <motion.div
          variants={{
            offscreen: { scale: 0.95, opacity: 0 },
            onscreen: {
              scale: 1,
              opacity: 1,
              transition: {
                scale: { duration: 0.6, ease: "backOut" },
                opacity: { duration: 0.4 },
              },
            },
          }}
          className="rounded-xl border bg-gradient-to-br from-background to-muted p-6 sm:p-8 shadow-sm"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-center">
            Ready to join the decentralized revolution?
          </h2>
          <motion.p
            variants={textReveal}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground text-center"
          >
            Become part of a community that&apos;s shaping the future of
            technology.
          </motion.p>
          <motion.div
            variants={textReveal}
            className="mt-6 flex justify-center"
          >
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Join Now
            </button>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}

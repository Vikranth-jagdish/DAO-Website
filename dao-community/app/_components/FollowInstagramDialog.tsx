"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram } from "lucide-react";

interface FollowInstagramDialogProps {
  open: boolean;
  onClose: () => void;
}

export const FollowInstagramDialog: React.FC<FollowInstagramDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-border/50 bg-gradient-to-br from-background/90 to-background/60 backdrop-blur-xl p-8 shadow-2xl overflow-hidden"
            initial={{ y: 40, opacity: 0, scale: 0.94 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-muted/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center space-y-5 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-2">
                <Instagram className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Follow Us on Instagram</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Want to know when we are recruiting new members? We announce all
                recruitment updates and community opportunities on our
                Instagram.
              </p>
              <motion.a
                href="https://www.instagram.com/daocommunity_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-primary/30 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit @daocommunity_
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

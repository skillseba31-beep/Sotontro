"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Repeat } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text tracking-tighter">Shotontro</div>
          <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Operations</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <Link
              href="/login"
              className="bg-white text-black px-5 py-2 rounded-full hover:bg-slate-200 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Phase 1 is now Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            The Intelligence Hub for <br />
            <span className="gradient-text">Modern Operations.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl"
          >
            Scale your service delivery, manage your team, and automate your workflow
            with a platform designed for high-resolution execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-xl shadow-primary/20"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors">
              Request a Demo
            </button>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
          {[
            { icon: <Zap />, title: "Rapid Execution", desc: "Turn service requests into projects in seconds with AI-assisted estimates." },
            { icon: <Shield />, title: "Enterprise Security", desc: "Role-based access control and high-level encryption for all your data." },
            { icon: <Repeat />, title: "Automated Workflows", desc: "Smart state machine that handles your project lifecycle from lead to delivery." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/2 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import { Lock, Mail, ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative bg-[#0a0a0a]">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse delay-700" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md glass p-8 rounded-2xl z-10"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2 tracking-tight">
                        Welcome to <span className="gradient-text">Shotontro</span>
                    </h1>
                    <p className="text-slate-400 text-sm">
                        Sign in to manage your operations and team
                    </p>
                </div>

                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary transition-colors">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full bg-input border border-border rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-slate-600"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-sm font-medium text-slate-300">Password</label>
                            <a href="#" className="text-xs text-primary hover:underline">Forgot?</a>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary transition-colors">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-input border border-border rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-slate-600"
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 group transition-all mt-6 shadow-lg shadow-primary/25"
                    >
                        Sign In
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="my-8 flex items-center gap-4 text-slate-500">
                    <div className="h-px bg-border flex-1" />
                    <span className="text-xs uppercase tracking-widest font-medium">Or continue with</span>
                    <div className="h-px bg-border flex-1" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border hover:bg-white/5 transition-colors text-sm font-medium">
                        <Github size={20} />
                        GitHub
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border hover:bg-white/5 transition-colors text-sm font-medium">
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                        Google
                    </button>
                </div>

                <p className="mt-8 text-center text-sm text-slate-500 font-hindi">
                    Don&apos;t have an account?
                    <a href="#" className="text-primary hover:underline font-semibold ml-1">Register now</a>
                </p>
            </motion.div>
        </div>
    );
}

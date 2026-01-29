import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
    return (
        <section id="experience" className="w-full min-h-screen py-20 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Link href={"#experience"}>
                        <BoxReveal width="100%" boxColor="#3b82f6">
                            <h2
                                className={cn(
                                    "bg-clip-text text-5xl text-center text-transparent md:text-8xl font-black tracking-tighter",
                                    "bg-gradient-to-b from-black/80 to-black/40",
                                    "dark:bg-gradient-to-b dark:from-white/90 dark:to-white/30"
                                )}
                            >
                                EXPERIENCE
                            </h2>
                        </BoxReveal>
                    </Link>
                </div>

                <div className="max-w-4xl mx-auto">
                    <BoxReveal width="100%" delay={0.2} boxColor="#3b82f6">
                        <div className="group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl p-8 md:p-12 transition-all duration-500 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] hover:border-blue-500/50">
                            <div className="flex flex-col md:flex-row md:items-start gap-10">
                                {/* Logo with explicit background */}
                                <div className="relative flex-shrink-0 w-28 h-28 rounded-2xl bg-white flex items-center justify-center border border-black/10 shadow-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden z-20">
                                    <Image
                                        src="/assets/bi3-logo.png"
                                        alt="BI3 Technologies"
                                        width={112}
                                        height={112}
                                        className="object-contain p-3"
                                    />
                                </div>

                                <div className="flex-grow space-y-6 text-left relative z-20">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                            System and Cloud Admin
                                        </h3>
                                        <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20 whitespace-nowrap">
                                            Full-time
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
                                            <span className="text-blue-500 mr-2">@</span>
                                            BI3 Technologies
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 dark:text-slate-400 font-semibold italic">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-5 h-5 text-blue-500" />
                                                <span>Jun 2025 - Dec 2025 · 7 mos</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-5 h-5 text-red-500" />
                                                <span>Chennai, India · On-site</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-black/10 dark:border-white/10 space-y-6">
                                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                            Spearheading cloud infrastructure management and system administration.
                                            Focusing on high availability, performance optimization, and implementing
                                            automated deployment pipelines to drive operational excellence.
                                        </p>

                                        <div className="flex flex-wrap gap-2.5 pt-2">
                                            {["Cloud Admin", "System Admin", "Server Management", "Infrastructure", "Automation"].map((skill) => (
                                                <span key={skill} className="px-4 py-1.5 text-xs font-bold rounded-lg bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5 uppercase tracking-widest transition-colors hover:bg-blue-500/20 hover:text-blue-500">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative side effect */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[100px] pointer-events-none rounded-full" />
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 blur-[100px] pointer-events-none rounded-full" />
                        </div>
                    </BoxReveal>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

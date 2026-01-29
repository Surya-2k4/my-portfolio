import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
    return (
        <section id="experience" className="w-full min-h-screen py-20 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <Link href={"#experience"}>
                        <BoxReveal width="100%">
                            <h2
                                className={cn(
                                    "bg-clip-text text-4xl text-center text-transparent md:text-7xl font-bold tracking-tighter",
                                    "bg-gradient-to-b from-black/80 to-black/50",
                                    "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
                                )}
                            >
                                EXPERIENCE
                            </h2>
                        </BoxReveal>
                    </Link>
                </div>

                <div className="max-w-4xl mx-auto">
                    <BoxReveal width="100%" delay={0.2}>
                        <div className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-md p-8 md:p-12 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-500 shadow-2xl">
                            <div className="flex flex-col md:flex-row md:items-start gap-8">
                                {/* Logo */}
                                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-black/5 dark:border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                                    <Image
                                        src="/assets/bi3-logo.png"
                                        alt="BI3 Technologies"
                                        width={96}
                                        height={96}
                                        className="object-contain p-2"
                                    />
                                </div>

                                <div className="flex-grow space-y-4 text-left">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <h3 className="text-2xl md:text-3xl font-bold text-black/90 dark:text-white/90 tracking-tight">
                                            System and Cloud Admin
                                        </h3>
                                        <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                            Full-time
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center text-lg md:text-xl font-semibold text-black/70 dark:text-white/70">
                                            <span className="text-blue-500 mr-2">@</span>
                                            BI3 Technologies
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-black/60 dark:text-white/50 font-medium">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-blue-400" />
                                                <span>Jun 2025 - Dec 2025 · 7 mos</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-red-400" />
                                                <span>Chennai, Tamil Nadu, India · On-site</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-4">
                                        <p className="text-black/70 dark:text-white/60 leading-relaxed font-medium">
                                            Managing robust cloud infrastructure and streamlining system administration processes.
                                            Ensuring high availability of services, optimizing server performance, and implementing
                                            automated deployment strategies to enhance operational efficiency.
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {["Cloud Admin", "System Admin", "Server Management", "Infrastructure", "Automation"].map((skill) => (
                                                <span key={skill} className="px-3 py-1 text-xs font-semibold rounded-md bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/40 border border-black/5 dark:border-white/5 uppercase tracking-wider">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative side effect */}
                            <div className="absolute top-0 right-0 -tr-10 w-32 h-32 bg-blue-500/10 blur-[60px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 -bl-10 w-32 h-32 bg-purple-500/10 blur-[60px] pointer-events-none" />
                        </div>
                    </BoxReveal>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

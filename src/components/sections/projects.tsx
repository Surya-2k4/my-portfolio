"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { motion } from "framer-motion";
import { BoxReveal } from "../reveal-animations";

import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-4">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
        <Link href={"#projects"}>
          <BoxReveal width="100%" boxColor="#3b82f6">
            <h2
              className={cn(
                "bg-clip-text text-4xl sm:text-5xl text-center text-transparent md:text-8xl font-black tracking-tighter",
                "bg-gradient-to-b from-black/80 to-black/40",
                "dark:bg-gradient-to-b dark:from-white/90 dark:to-white/30"
              )}
            >
              PROJECTS
            </h2>
          </BoxReveal>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <BoxReveal key={project.id} width="100%" delay={0.2 + index * 0.1} boxColor="#3b82f6">
            <ProjectCard
              project={project}
            />
          </BoxReveal>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Modal>
      <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full p-0 border-none text-left h-full">
        <div className="group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl p-5 md:p-6 transition-all duration-500 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] hover:border-blue-500/50 w-full flex flex-col h-full min-h-[450px]">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-500 mb-6 flex-shrink-0">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-grow flex flex-col space-y-3">
            <div className="flex flex-col gap-1">
              <div className="text-[10px] md:text-xs font-bold text-blue-500 uppercase tracking-widest">
                {project.category}
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight line-clamp-2">
                {project.title}
              </h3>
            </div>

            <div className="pt-4 mt-auto border-t border-black/10 dark:border-white/10">
              <div className="flex flex-wrap gap-2">
                {[...(project.skills.frontend || []), ...(project.skills.backend || [])].slice(0, 4).map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 text-[10px] font-bold rounded-lg bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5 uppercase tracking-widest">
                    {skill.title}
                  </span>
                ))}
                {([...(project.skills.frontend || []), ...(project.skills.backend || [])].length > 4) && (
                  <span className="px-2 py-1 text-[10px] font-bold text-slate-400">
                    +{[...(project.skills.frontend || []), ...(project.skills.backend || [])].length - 4}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Decorative side effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />
        </div>
      </ModalTrigger>
      <ModalBody className="md:max-w-5xl md:max-h-[85vh]">
        <ModalContent>
          <ProjectContents project={project} />
        </ModalContent>
        <ModalFooter className="gap-4 border-t border-black/5 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky bottom-0 z-50">
          <ModalFooterButtons project={project} />
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

const ModalFooterButtons = ({ project }: { project: Project }) => {
  const { setOpen } = useModal();
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
        className="px-6 py-2 bg-neutral-100 text-black dark:bg-zinc-800 dark:text-white border border-black/5 dark:border-white/10 rounded-xl text-sm font-bold hover:bg-neutral-200 dark:hover:bg-zinc-700 transition-colors shadow-sm"
      >
        Close
      </button>
      {project.live && (
        <Link href={project.live} target="_blank">
          <button className="bg-blue-600 text-white dark:bg-blue-500 dark:text-white text-sm font-bold px-6 py-2 rounded-xl border border-blue-700 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)] hover:bg-blue-700 dark:hover:bg-blue-400 transition-all active:scale-95">
            Visit Live Demo
          </button>
        </Link>
      )}
    </>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="space-y-12 py-4">
      <div className="space-y-4">
        <h4 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">
          {project.title}
        </h4>
        <div className="w-20 h-2 bg-blue-500 rounded-full" />
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <h5 className="text-sm font-black uppercase tracking-widest text-blue-500">Tech Stack</h5>
          <div className="flex flex-col gap-6 pt-2 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-4 bg-slate-50 dark:bg-zinc-900/50 p-4 md:p-6 rounded-2xl border border-black/5 dark:border-white/5">
              <div className="flex flex-col gap-2 min-w-[120px]">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest text-left">Frontend</span>
                {project.skills.frontend?.length > 0 && (
                  <div className="flex justify-start overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
              </div>
              {project.skills.backend?.length > 0 && (
                <div className="flex flex-col gap-2 min-w-[120px] sm:border-l border-black/10 dark:border-white/10 sm:pl-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest text-left">Backend</span>
                  <div className="flex justify-start overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                    <FloatingDock items={project.skills.backend} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none text-left">
          {project.content}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

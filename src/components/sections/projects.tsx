"use client";
import Image from "next/image";
import React, { useRef } from "react";
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
import { motion, useScroll, useTransform } from "framer-motion";

import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-4">
      <Link href={"#projects"}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "bg-clip-text text-5xl text-center text-transparent md:text-8xl font-black pt-16 mb-24",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/90 dark:to-white/40"
          )}
        >
          PROJECTS
        </motion.h2>
      </Link>
      <div className="flex flex-col gap-24 md:gap-0 relative">
        {projects.map((project, index) => (
          <StickyProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

const StickyProjectCard = ({
  project,
  index,
  total
}: {
  project: Project;
  index: number;
  total: number
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          opacity,
          zIndex: index,
          top: `calc(10% + ${index * 20}px)`,
        }}
        className="w-full max-w-5xl"
      >
        <Modall project={project} />
      </motion.div>
    </div>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full p-0 border-none">
          <div
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 group/card bg-white dark:bg-zinc-900"
          >
            <Image
              className="absolute w-full h-full object-cover top-0 left-0 transition-transform duration-700 group-hover/card:scale-110"
              src={project.src}
              alt={project.title}
              width={1200}
              height={800}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-500">
              <div className="flex flex-col h-full items-start justify-end p-8 md:p-12 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-sm md:text-base font-bold text-blue-400 mb-2 uppercase tracking-widest leading-none">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase leading-none">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/70 group-hover/modal-btn:text-white transition-colors">
                    <span className="text-sm font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                      View Project Details
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
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
    </div>
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
            <div className="flex flex-wrap items-center gap-4 bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-black/5 dark:border-white/5">
              <div className="flex flex-col gap-2 min-w-[120px]">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest text-left">Frontend</span>
                {project.skills.frontend?.length > 0 && (
                  <div className="flex justify-start">
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
              </div>
              {project.skills.backend?.length > 0 && (
                <div className="flex flex-col gap-2 min-w-[120px] border-l border-black/10 dark:border-white/10 pl-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest text-left">Backend</span>
                  <div className="flex justify-start">
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

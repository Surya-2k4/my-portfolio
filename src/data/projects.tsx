import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" width={20} height={20} />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/icons8-java.svg" alt="Java" width={20} height={20} />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-5 h-5" width={20} height={20} />,
  },
  dart: {
    title: "Dart",
    bg: "black",
    fg: "white",
    icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" className="w-5 h-5" width={20} height={20} />,
  },
  firebase_rtdb: {
    title: "Firebase RTDB",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  mqtt: {
    title: "MQTT.js",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  convex: {
    title: "Convex",
    bg: "black",
    fg: "white",
    icon: <Image src="https://images.opencollective.com/convex/0d6863d/logo/256.png" alt="Convex" width={20} height={20} />,
  },
  clerk: {
    title: "Clerk",
    bg: "black",
    fg: "white",
    icon: <Image src="https://pbs.twimg.com/profile_images/1691811808003444736/Uo5E2g0i_400x400.jpg" alt="Clerk" width={20} height={20} />,
  },
  gemini: {
    title: "Gemini AI",
    bg: "black",
    fg: "white",
    icon: <Image src="https://www.gstatic.com/lamda/images/favicon_v2_192x192.png" alt="Gemini" width={20} height={20} />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "playdate",
    category: "Real-time Media",
    title: "PlayDate",
    src: "https://raw.githubusercontent.com/Surya-2k4/PlayDate/main/output/home.jpeg",
    screenshots: [
      "https://raw.githubusercontent.com/Surya-2k4/PlayDate/main/output/splash.jpeg",
      "https://raw.githubusercontent.com/Surya-2k4/PlayDate/main/output/signup.png",
      "https://raw.githubusercontent.com/Surya-2k4/PlayDate/main/output/signin.png",
      "https://raw.githubusercontent.com/Surya-2k4/PlayDate/main/output/home.jpeg",
      "https://raw.githubusercontent.com/Surya-2k4/PlayDate/main/output/chat.jpeg",
      "https://raw.githubusercontent.com/Surya-2k4/PlayDate/main/output/inside%20room.jpeg",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.firebase_rtdb,
      ],
    },
    live: "https://github.com/Surya-2k4/PlayDate",
    github: "https://github.com/Surya-2k4/PlayDate",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            PlayDate 🎵📱
          </TypographyP>
          <TypographyP className="font-mono ">
            PlayDate is a real-time synchronized media sharing application built with Flutter. It allows users to create virtual rooms where they can watch YouTube videos or listen to music together, synchronized in real-time, while chatting with their partner.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>Real-time Synchronized Playback:</strong> Watch and listen together! Play/pause and seek actions are synchronized.</li>
            <li><strong>Virtual Rooms:</strong> Create private rooms or join existing ones using a unique Room ID.</li>
            <li><strong>YouTube Integration:</strong> Search and stream YouTube content directly within the app.</li>
            <li><strong>Live Chat:</strong> Integrated real-time chat system powered by Firebase Realtime Database.</li>
          </ul>
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "streamflow",
    category: "Dashboard",
    title: "StreamFlow",
    src: "https://raw.githubusercontent.com/Surya-2k4/StreamFlow/main/screenshots/tv.png",
    screenshots: [
      "https://raw.githubusercontent.com/Surya-2k4/StreamFlow/main/screenshots/tv.png",
      "https://raw.githubusercontent.com/Surya-2k4/StreamFlow/main/screenshots/chat.png",
      "https://raw.githubusercontent.com/Surya-2k4/StreamFlow/main/screenshots/radio.png",
      "https://raw.githubusercontent.com/Surya-2k4/StreamFlow/main/screenshots/news.png",
      "https://raw.githubusercontent.com/Surya-2k4/StreamFlow/main/screenshots/weather.png",
      "https://raw.githubusercontent.com/Surya-2k4/StreamFlow/main/screenshots/focus.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.mqtt,
      ],
    },
    live: "https://github.com/Surya-2k4/StreamFlow",
    github: "https://github.com/Surya-2k4/StreamFlow",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            StreamFlow 🌊
          </TypographyP>
          <TypographyP className="font-mono ">
            StreamFlow is a modern, all-in-one personal dashboard application that brings together entertainment, information, and productivity tools into a single, beautifully designed interface. Built with Vanilla JS, it demonstrates robust frontend architecture.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>Live TV Streaming:</strong> HLS integration for seamless playback of m3u8 streams.</li>
            <li><strong>Global Real-Time Chat:</strong> Instant messaging powered by MQTT.js over WebSockets.</li>
            <li><strong>Music & Radio:</strong> Browse and play songs with a global radio tuner.</li>
            <li><strong>Smart News & Weather:</strong> Fetches latest headlines and real-time weather data.</li>
            <li><strong>Focus Mode:</strong> Pomodoro timer with ambient sounds for deep work.</li>
          </ul>
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "talkaholic",
    category: "Messaging",
    title: "Talkaholic Chat Application",
    src: "https://raw.githubusercontent.com/Surya-2k4/Talkaholic-Chat-Application/main/assets/screenshots/home.jpg",
    screenshots: [
      "https://raw.githubusercontent.com/Surya-2k4/Talkaholic-Chat-Application/main/assets/screenshots/login.jpg",
      "https://raw.githubusercontent.com/Surya-2k4/Talkaholic-Chat-Application/main/assets/screenshots/register.jpg",
      "https://raw.githubusercontent.com/Surya-2k4/Talkaholic-Chat-Application/main/assets/screenshots/home.jpg",
      "https://raw.githubusercontent.com/Surya-2k4/Talkaholic-Chat-Application/main/assets/screenshots/utility.jpg",
      "https://raw.githubusercontent.com/Surya-2k4/Talkaholic-Chat-Application/main/assets/screenshots/ai.jpg",
      "https://raw.githubusercontent.com/Surya-2k4/Talkaholic-Chat-Application/main/assets/screenshots/encrypt.jpg",
      "https://raw.githubusercontent.com/Surya-2k4/Talkaholic-Chat-Application/main/assets/screenshots/txt2pdf.jpg",
      "https://raw.githubusercontent.com/Surya-2k4/Talkaholic-Chat-Application/main/assets/screenshots/game.jpg",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "https://github.com/Surya-2k4/Talkaholic-Chat-Application",
    github: "https://github.com/Surya-2k4/Talkaholic-Chat-Application",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Talkaholic 🚀💬
          </TypographyP>
          <TypographyP className="font-mono ">
            A feature-rich and interactive chat application focused on delivering an exceptional user experience through unique UI elements like giftbox-style message delivery and built-in AI chat capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Unique Capabilities</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>AI Chat Integration:</strong> Experience power of AI-driven conversations directly in-app.</li>
            <li><strong>Encryption/Decryption:</strong> Dedicated tools for secure messaging.</li>
            <li><strong>Message Giftboxes:</strong> Messages arrive as gift boxes revealed upon tapping.</li>
            <li><strong>Utility Tools:</strong> Text-to-PDF generation, Word Dash game, and more.</li>
          </ul>
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "labmanager",
    category: "Management",
    title: "Student Lab Manager",
    src: "https://raw.githubusercontent.com/Surya-2k4/Student-Lab-Manager/main/lib/images/home.png",
    screenshots: [
      "https://raw.githubusercontent.com/Surya-2k4/Student-Lab-Manager/main/lib/images/splash.png",
      "https://raw.githubusercontent.com/Surya-2k4/Student-Lab-Manager/main/lib/images/home.png",
      "https://raw.githubusercontent.com/Surya-2k4/Student-Lab-Manager/main/lib/images/filled.png",
      "https://raw.githubusercontent.com/Surya-2k4/Student-Lab-Manager/main/lib/images/form.png",
      "https://raw.githubusercontent.com/Surya-2k4/Student-Lab-Manager/main/lib/images/studList.png",
      "https://raw.githubusercontent.com/Surya-2k4/Student-Lab-Manager/main/lib/images/pdf.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "https://github.com/Surya-2k4/Student-Lab-Manager",
    github: "https://github.com/Surya-2k4/Student-Lab-Manager",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Student Lab Manager 🔬📚
          </TypographyP>
          <TypographyP className="font-mono ">
            A Flutter-based Student Lab Management System designed to streamline and digitize the process of managing student entries in a lab, with seamless Google Sheets integration.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Workflow</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>Digital Data Entry:</strong> Easy form for students to record session and system details.</li>
            <li><strong>Google Sheets Sync:</strong> Automated storage in cloud spreadsheets for easy management.</li>
            <li><strong>PDF Exporting:</strong> Generate and download PDF records of student entries.</li>
            <li><strong>Record Filtering:</strong> Filter entries by date using an intuitive date picker.</li>
          </ul>
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "aipdfnotes",
    category: "AI & Productivity",
    title: "AI PDF Note Taker",
    src: "https://raw.githubusercontent.com/Surya-2k4/AI-PDF-Note-Taker/main/images/workspace.png",
    screenshots: [
      "https://raw.githubusercontent.com/Surya-2k4/AI-PDF-Note-Taker/main/images/landing.png",
      "https://raw.githubusercontent.com/Surya-2k4/AI-PDF-Note-Taker/main/images/dashboard.png",
      "https://raw.githubusercontent.com/Surya-2k4/AI-PDF-Note-Taker/main/images/workspace.png",
      "https://raw.githubusercontent.com/Surya-2k4/AI-PDF-Note-Taker/main/images/saved-notes.png",
      "https://raw.githubusercontent.com/Surya-2k4/AI-PDF-Note-Taker/main/images/payment-detail.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.convex,
        PROJECT_SKILLS.clerk,
        PROJECT_SKILLS.gemini,
      ],
    },
    live: "https://github.com/Surya-2k4/AI-PDF-Note-Taker",
    github: "https://github.com/Surya-2k4/AI-PDF-Note-Taker",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI PDF Note Taker 🧠📄
          </TypographyP>
          <TypographyP className="font-mono ">
            A sophisticated AI-powered document intelligence platform that transforms static PDFs into interactive workspaces. Users can chat with their documents, generate summaries, and maintain persistent notes using the Gemini API.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>Intelligent Q&A:</strong> Ask context-aware questions about any PDF using Google Gemini.</li>
            <li><strong>AI Workspace:</strong> Split-pane view with a full-featured text editor and PDF viewer.</li>
            <li><strong>Persistence:</strong> Real-time data sync and storage powered by Convex DB.</li>
            <li><strong>Monetization:</strong> Integrated PayPal payment system for premium features.</li>
            <li><strong>Security:</strong> Enterprise-grade authentication via Clerk.</li>
          </ul>
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "tripsplit",
    category: "Finance & Management",
    title: "TripSplit",
    src: "https://raw.githubusercontent.com/Surya-2k4/TripSplit/main/preview.png", // Attempting a standard preview path, if fails will fallback
    screenshots: [
      "https://raw.githubusercontent.com/Surya-2k4/TripSplit/main/preview.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    live: "https://tripsplit-lake.vercel.app",
    github: "https://github.com/Surya-2k4/TripSplit",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            TripSplit ✈️💰
          </TypographyP>
          <TypographyP className="font-mono ">
            TripSplit is a simple and intuitive web application that helps users manage, split, and settle group travel expenses fairly. It removes the hassle of manual calculations and makes group expense tracking transparent and easy.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>Trip Management:</strong> Create and manage multiple group trips seamlessly.</li>
            <li><strong>Participant Tracking:</strong> Add group members and track their individual spending.</li>
            <li><strong>Automated Splitting:</strong> Calculate exactly how much everyone owes with zero effort.</li>
            <li><strong>Settlement Logic:</strong> Clearly identifies &quot;who owes whom&quot; to resolve debts instantly.</li>
            <li><strong>Responsive Design:</strong> Clean, mobile-friendly interface for tracking expenses on the go.</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;


"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Links() {
  return (
    <ul className="space-y-2">
      <li className="about group">
        <a className="mr-10 flex items-center py-2" href="#about">
          <span
            className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all duration-500 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 group-[.active]:w-16 group-[.active]:bg-slate-200 motion-reduce:transition-none`}
          ></span>
          <span
            className={`nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200`}
          >
            About
          </span>
        </a>
      </li>
      <li className="experience group">
        <a className="mr-10 flex items-center py-2" href="#experience">
          <span
            className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all duration-500 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 group-[.active]:w-16 group-[.active]:bg-slate-200 motion-reduce:transition-none`}
          ></span>
          <span
            className={`nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200`}
          >
            Experience
          </span>
        </a>
      </li>
      <li className="projects group">
        <a className="mr-10 flex items-center py-2 pb-4" href="#projects">
          <span
            className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all duration-500 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 group-[.active]:w-16 group-[.active]:bg-slate-200 motion-reduce:transition-none`}
          ></span>
          <span
            className={`nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200`}
          >
            Projects
          </span>
        </a>
      </li>
      <Separator className="w-11/12" />
      <li className="group flex items-center py-2">
        <Button asChild variant="link" className="w-full p-0">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="group flex items-center"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all duration-500 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text mr-auto text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-slate-200 group-focus-visible:text-slate-200">
              My Resume
            </span>
          </Link>
        </Button>
      </li>
    </ul>
  );
}

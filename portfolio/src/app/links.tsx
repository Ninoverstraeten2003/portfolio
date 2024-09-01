"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useHash from "@/hooks/use-hash";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export function Links() {
	const params = useParams();
	const hash = useHash();

	return (
		<ul className="space-y-2">
			<li>
				<a className="group flex items-center py-2" href="#about">
					<span
						className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 ${
							hash === "about" ? "active" : ""
						} [&.active]:bg-slate-200 [&.active]:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
					></span>
					<span
						className={` ${
							hash === "about" ? "active" : ""
						} nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground [&.active]:text-slate-200 group-hover:text-slate-200 group-focus-visible:text-slate-200`}
					>
						About
					</span>
				</a>
			</li>
			<li>
				<a className="group flex items-center py-2" href="#experience">
					<span
						className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 ${
							hash === "experience" ? "active" : ""
						} [&.active]:bg-slate-200 [&.active]:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
					></span>
					<span
						className={` ${
							hash === "experience" ? "active" : ""
						} nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground [&.active]:text-slate-200 group-hover:text-slate-200 group-focus-visible:text-slate-200`}
					>
						Experience
					</span>
				</a>
			</li>
			<li>
				<a className="group flex items-center py-2" href="#projects">
					<span
						className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 ${
							hash === "projects" ? "active" : ""
						} [&.active]:bg-slate-200 [&.active]:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
					></span>
					<span
						className={` ${
							hash === "projects" ? "active" : ""
						} nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground [&.active]:text-slate-200 group-hover:text-slate-200 group-focus-visible:text-slate-200`}
					>
						Projects
					</span>
				</a>
			</li>
			<Separator className="w-11/12"/>
			<li className="group flex items-center py-2">
				<Button asChild variant="link" className="p-0">
					<Link
						href="/Resume2024.pdf"
						target="_blank"
						className="group flex items-center "
					>
						<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
						<span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-slate-200 group-focus-visible:text-slate-200">
							My Resume
						</span>
					</Link>
				</Button>
			</li>
		</ul>
	);
}

import Image from "next/image";
import Link from "next/link";
import Github from "../../public/github.svg";
import LinkedIn from "../../public/linkedin.svg";
import { Links } from "./links";
import Projects from "./projects";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
			<div className="lg:flex lg:justify-between lg:gap-4">
				<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
					<div>
						<h1 className="text-5xl font-bold text-foreground mb-2">
							Nino Verstraeten
						</h1>
						<h2 className="text-xl mb-2">Software Engineer</h2>
						<p className="mb-8 text-muted-foreground">
							Focused on building accessible digital experiences.
						</p>
						<nav className="hidden lg:block">
							<Links />
						</nav>
						<nav className="block lg:hidden">
							<Button asChild variant="link" className="p-0">
								<Link
									href="/Resume2024.pdf"
									target="_blank"
									className="group flex items-center"
								>
									<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
									<span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-slate-200 group-focus-visible:text-slate-200">
										My Resume
									</span>
								</Link>
							</Button>
						</nav>
					</div>
					<ul className="ml-1 mt-8 flex items-center" key={"LinkedIn"}>
						<li className="mr-5 text-xs shrink-0">
							<Link href="https://www.linkedin.com/in/nino-verstraeten">
								<Image alt="LinkedIn" src={LinkedIn} />
							</Link>
						</li>
						<li className="mr-5 text-xs shrink-0" key={"Github"}>
							<Link href="https://www.github.com/Ninoverstraeten2003">
								<Image alt="Github" src={Github} />
							</Link>
						</li>
					</ul>
				</header>
				<main className="pt-24 lg:w-1/2 lg:py-24">
					<section
						id="about"
						className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24 text-muted-foreground"
					>
						<div className="sticky top-0 z-20 lg:-z-10 -mx-6 w-screen px-6 py-5 lg:pt-0 backdrop-blur md:-mx-12 md:px-12 lg:top-auto lg:mx-auto lg:w-full lg:px-0">
							<h2 className="text-sm font-bold uppercase tracking-widest">
								About
							</h2>
						</div>
						<p className="mb-4">
							I have been captivated by the world of{" "}
							<span className="text-foreground">science</span> and
							<span className="text-foreground"> technology</span> since
							childhood. My
							<span className="text-foreground"> curiosity</span> led me to
							explore the intricacies of{" "}
							<span className="text-foreground"> computers</span>, from
							disassembling old devices to configuring game servers for
							Minecraft and Ark. I spent countless hours experimenting with{" "}
							<span className="text-foreground"> Raspberry Pi</span>, building
							<span className="text-foreground"> automation scripts</span>, and
							diving deep into the world of electronics. My fascination with
							technology only grew as I watched hours of
							<span className="text-foreground"> PC building </span>
							videos, meticulously analyzing how every component impacted
							<span className="text-foreground"> performance</span>.
							<span className="text-foreground"> Gaming</span> was more than
							just a pastime; it was an immersion into the cutting edge of
							<span className="text-foreground"> high-tech developments</span>
						</p>
						<p className="mb-4">
							My journey has taught me the value of{" "}
							<span className="text-foreground">hard work</span>,
							<span className="text-foreground"> discipline,</span> and a
							relentless pursuit of{" "}
							<span className="text-foreground">perfection</span>. While I take
							pride in my meticulous attention to detail, I also recognize that
							my <span className="text-foreground">perfectionism</span> can be a
							double-edged sword. I thrive in environments that challenge me and
							push me to <span className="text-foreground">innovate</span>,
							especially when there’s a{" "}
							<span className="text-foreground">competitive edge</span>.
						</p>
						<p>
							As I continue to grow in the tech industry, I am eager to
							contribute to{" "}
							<span className="text-foreground">cutting-edge projects</span> and
							drive{" "}
							<span className="text-foreground">
								technological advancements
							</span>
							, all while investing in both my professional and personal{" "}
							<span className="text-foreground">growth</span>.
						</p>
					</section>
					<section
						id="experience"
						className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24 text-muted-foreground"
					>
						<div className="sticky top-0 z-20 lg:-z-10 -mx-6 w-screen px-6 py-5 lg:pt-0 lg:pb-10 backdrop-blur md:-mx-12 md:px-12 lg:top-auto lg:mx-auto lg:w-full lg:px-0">
							<h2 className="text-sm font-bold uppercase tracking-widest">
								Experience
							</h2>
						</div>
						<div>
							<ol>
								<li className="mb-12">
									<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
										<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 backdrop-blur-lg lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
										<header
											className="sm:order-1 z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
											aria-label="2024 to Present"
										>
											Feb — Apr 2024
										</header>
										<div className="z-10 sm:col-span-6">
											<h3 className="font-medium leading-snug text-slate-200">
												<div>
													<a
														className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-200 focus-visible:text-teal-200  group/link text-base"
														href="https://syscom.be"
														target="_blank"
														rel="noreferrer noopener"
														aria-label="Frontend Engineer Intern, Accessibility at Syscom (opens in a new tab)"
													>
														<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
														<span>
															Frontend Engineer Intern ·{" "}
															<span className="inline-block">
																Syscom
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
																	aria-hidden="true"
																	data-darkreader-inline-fill=""
																>
																	<path
																		fillRule="evenodd"
																		d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																		clipRule="evenodd"
																	></path>
																</svg>
															</span>
														</span>
													</a>
												</div>
											</h3>
											<p className="mt-2 text-sm leading-normal">
												Built a web application that retrieves and displays
												information about Microsoft tenants, their
												subscriptions, and alerts via the Beta API.
											</p>
											<ul
												className="mt-2 flex flex-wrap"
												aria-label="Technologies used"
											>
												<li className="mr-1.5 mt-2">
													<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-200 ">
														TypeScript
													</div>
												</li>
												<li className="mr-1.5 mt-2">
													<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-200 ">
														Angular
													</div>
												</li>
												<li className="mr-1.5 mt-2">
													<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-200 ">
														Microsoft Beta API
													</div>
												</li>
											</ul>
										</div>
									</div>
								</li>
							</ol>
						</div>
					</section>
					<section
						id="projects"
						className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-muted-foreground"
					>
						<div className="sticky top-0 z-20 -mx-6 w-screen px-6 py-5 lg:pt-0 lg:pb-10 lg:-z-10 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0">
							<h2 className="text-sm font-bold uppercase tracking-widest">
								Projects
							</h2>
						</div>
						<Projects />
					</section>
				</main>
			</div>
		</div>
	);
}

import LinkedIn from "../../public/linkedin.svg";
import Github from "../../public/github.svg";
import Image from "next/image";
import Link from "next/link";
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
						{/* <nav>
							<ul className="space-y-2">
								<li className="text-sm uppercase tracking-wider text-muted-foreground">
									About
								</li>
								<li className="text-sm uppercase tracking-wider text-muted-foreground">
									Experience
								</li>
								<li className="text-sm uppercase tracking-wider text-muted-foreground">
									Projects
								</li>
							</ul>
						</nav> */}
						<Button asChild>
							<Link href="/Resume_08_2024.pdf" target="_blank">
								My Resume
							</Link>
						</Button>
					</div>
					<ul className="ml-1 mt-8 flex items-center">
						<li className="mr-5 text-xs shrink-0">
							<Link href="https://www.linkedin.com/in/nino-verstraeten">
								<Image alt="LinkedIn" src={LinkedIn} />
							</Link>
						</li>
						<li className="mr-5 text-xs shrink-0">
							<Link href="https://www.github.com/Ninoverstraeten2003">
								<Image alt="Github" src={Github} />
							</Link>
						</li>
					</ul>
				</header>
				<main className="pt-24 lg:w-1/2 lg:py-24">
					<section
						id="about"
						className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-muted-foreground"
					>
						<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
							<h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
								About
							</h2>
						</div>
						<p className="mb-4">
							I have been captivated by the world of{" "}
							<span className="text-card-foreground">science</span> and
							<span className="text-card-foreground"> technology</span> since
							childhood. My
							<span className="text-card-foreground"> curiosity</span> led me to
							explore the intricacies of{" "}
							<span className="text-card-foreground"> computers</span>, from
							disassembling old devices to configuring game servers for
							Minecraft and Ark. I spent countless hours experimenting with{" "}
							<span className="text-card-foreground"> Raspberry Pi</span>,
							building
							<span className="text-card-foreground">
								{" "}
								automation scripts Pi
							</span>
							, and diving deep into the world of electronics. My fascination
							with technology only grew as I watched hours of
							<span className="text-card-foreground"> PC building </span>
							videos, meticulously analyzing how every component impacted
							<span className="text-card-foreground"> performance </span>.
							<span className="text-card-foreground"> Gaming </span> was more
							than just a pastime; it was an immersion into the cutting edge of
							<span className="text-card-foreground">
								{" "}
								high-tech developments
							</span>
						</p>
						<p className="mb-4">
							My journey has taught me the value of{" "}
							<span className="text-card-foreground">hard work</span>,
							<span className="text-card-foreground"> disipline</span> and a
							relentless pursuit of{" "}
							<span className="text-card-foreground">perfection</span>. While I
							take pride in my meticulous attention to detail, I also recognize
							that my{" "}
							<span className="text-card-foreground">perfectionism</span> can be
							a double-edged sword. I thrive in environments that challenge me
							and push me to{" "}
							<span className="text-card-foreground">innovate</span> especially
							when there’s a{" "}
							<span className="text-card-foreground">competitive edge</span>.
						</p>
						<p>
							As I continue to grow in the tech industry, I am eager to
							contribute to{" "}
							<span className="text-card-foreground">cutting-edge project</span>{" "}
							and drive{" "}
							<span className="text-card-foreground">
								technological advancements
							</span>
							, all while investing in both my professional and personal{" "}
							<span className="text-card-foreground">growth</span>.
						</p>
					</section>
				</main>
			</div>
		</div>
	);
}

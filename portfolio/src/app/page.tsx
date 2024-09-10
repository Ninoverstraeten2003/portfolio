import About from "@/components/About";
import AnimatedText from "@/components/AnimatedText";
import { Links } from "@/components/Links";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import LinkedIn from "../../public/linkedin.svg";
import Project, { ProjectProps } from "@/components/Project";

export default function Home() {
  const experiences: ProjectProps[] = [
    {
      title: "Frontend Engineer Intern",
      description:
        "Built a web application that retrieves and displays information about Microsoft tenants, their subscriptions, and alerts via the Beta API.",
      skills: ["TypeScript", "Angular", "Microsoft Beta API"],
      link: {
        href: "https://syscom.be",
        name: "Syscom",
        ariaLabel:
          "Frontend Engineer Intern, Accessibility at Syscom (opens in a new tab)",
      },
      header: "Feb — Apr 2024",
    },
  ];
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="mb-2 text-5xl font-bold text-foreground">
              Nino Verstraeten
            </h1>
            <h2 className="mb-2 text-xl">Software Engineer</h2>
            <AnimatedText />
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
            <li className="mr-6 shrink-0 text-xs">
              <Link href="https://www.linkedin.com/in/nino-verstraeten">
                <Image
                  alt="LinkedIn"
                  src={LinkedIn}
                  className="brightness-50 filter hover:brightness-100 sm:scale-125 lg:scale-150"
                />
              </Link>
            </li>
            <li className="mr-6 shrink-0 text-xs" key={"Github"}>
              <Link href="https://www.github.com/Ninoverstraeten2003">
                <Image
                  alt="Github"
                  src={Github}
                  className="brightness-50 filter hover:brightness-100 sm:scale-125 lg:scale-150"
                />
              </Link>
            </li>
            <li className="mr-6 shrink-0 text-xs" key={"Instagram"}>
              <Link href="https://www.instagram.com/nino_verstraeten">
                <Image
                  alt="Instagram"
                  src={Instagram}
                  className="brightness-50 filter hover:brightness-100 sm:scale-125 lg:scale-150"
                />
              </Link>
            </li>
          </ul>
        </header>
        <main className="pt-12 lg:w-1/2 lg:py-24">
          <About />
          <section
            id="experience"
            className="mb-16 scroll-mt-16 text-muted-foreground md:mb-24 lg:mb-24 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 -mx-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:top-auto lg:-z-10 lg:mx-auto lg:w-full lg:px-0 lg:pb-10 lg:pt-0">
              <h2 className="text-sm font-bold uppercase tracking-widest">
                Experience
              </h2>
            </div>
            <div>
              <ol>
                {experiences.map((experience) => {
                  return (
                    <Project
                      key={experience.title}
                      title={experience.title}
                      description={experience.description}
                      image={experience.image}
                      skills={experience.skills}
                      link={experience.link}
                      header={experience.header}
                    />
                  );
                })}
              </ol>
            </div>
          </section>
          <section
            id="projects"
            className="mb-16 scroll-mt-16 text-muted-foreground md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 -mx-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:-z-10 lg:mx-auto lg:w-full lg:px-0 lg:pb-10 lg:pt-0">
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

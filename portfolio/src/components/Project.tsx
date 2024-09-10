"use client";

export interface ProjectProps {
  title: string;
  description: string;
  image?: { src: string };
  skills: string[];
  link?: { name: string; href: string; ariaLabel: string };
  header?: string;
}

export default function Project({
  title,
  description,
  image,
  skills,
  link,
  header,
}: ProjectProps) {
  // const { data } = useGetPhotosByQuery({ query: title });

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md backdrop-blur-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        {header && (
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:order-1 sm:col-span-2"
            aria-label="2024 to Present"
          >
            {header}
          </header>
        )}
        <div className="z-10 sm:col-span-6">
          <h3>
            {link ? (
              <div>
                <a
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-white focus-visible:text-white"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.ariaLabel}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {title}
                    {link.name && (
                      <>
                        <span className="mx-1">·</span>
                        <span className="inline-block">
                          {link.name ? link.name : ""}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
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
                      </>
                    )}
                  </span>
                </a>
              </div>
            ) : (
              <div
                className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200"
                // href=""
                // target="_blank"
                // rel="noreferrer noopener"
                // aria-label="Voting Playlist (opens in a new tab)"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {title}
                  <span className="inline-block">
                    {/* <svg
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
									</svg> */}
                  </span>
                </span>
              </div>
            )}
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {skills.map((skill) => {
              return (
                <div key={skill}>
                  <li className="mr-1.5 mt-2">
                    <div className="hero-join-button-dark group relative items-center justify-center overflow-hidden rounded-xl border border-input p-[1px] text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                      <span className="inline-flex items-center rounded-xl bg-secondary px-2 py-1 text-xs text-accent-foreground transition-all">
                        {skill}
                      </span>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        {/* {data?.results?.[0]?.urls.thumb && (
					<Image
						alt={title}
						width={200}
						height={100}
						src={data?.results?.[0]?.urls.thumb!}
						className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-2 sm:col-span-2 sm:translate-y-1 w-52 h-24 object-cover"
					></Image>
				)} */}
      </div>
    </li>
  );
}

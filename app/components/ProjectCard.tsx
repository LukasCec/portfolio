import Link from "next/link";
import StackIcon from "tech-stack-icons";

interface ProjectCardProps {
    name: string;
    description: string;
    tech: string[];
    demoUrl: string;
}

export default function ProjectCard({
                                        name,
                                        description,
                                        tech,
                                        demoUrl,
                                    }: ProjectCardProps) {
    return (
        <div className="
            group w-full border-b border-white/20
            py-6 sm:py-8
            transition-all hover:bg-white/5
            flex flex-col gap-4
            sm:flex-row sm:gap-0 ml-3  sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 pr-5
        ">
            <div className="
                flex-1 flex flex-col justify-center
                items-start sm:items-start
            ">
                <h2 className="
                    text-2xl xs:text-3xl sm:text-[32px] md:text-[38px]
                    font-extralight uppercase tracking-tight leading-tight
                    group-hover:translate-x-2 transition-all duration-300
                    max-w-full break-words
                ">
                    {name}
                </h2>
                <div className="flex items-center gap-2 sm:gap-3 mt-2 flex-wrap">
                    {tech.map((t) => (
                        <StackIcon key={t} className="h-5 w-5 sm:h-6 sm:w-6 opacity-70" name={t} />
                    ))}
                </div>
            </div>

            <div className="
                flex-1 flex flex-col justify-between
                sm:pr-6 sm:pl-10
                px-0
            ">
                <p className="mb-3 text-[12px] sm:mb-5 text-white/80 text-base font-normal sm:text-lg">
                    {description}
                </p>
                <Link
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white/50 hover:underline text-sm sm:text-base"
                >
                    <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                </Link>
            </div>
        </div>
    );
}

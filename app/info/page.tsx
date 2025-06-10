"use client";
import { motion } from "framer-motion";

const links = [
    { name: "GitHub", url: "https://github.com/LukasCec" },
    { name: "X(Twitter)", url: "https://x.com/lukas_c_e_c" },
    { name: "Instagram", url: "https://www.instagram.com/lukas_c_e_c" },

];

export default function Info() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            transition={{
                duration: 1,
                ease: [0.23, 1, 0.32, 1],
            }}
            className="contents"
        >

            <div className="hidden lg:block" />

            <div
                className="
    flex w-full h-full
    items-center justify-center
    px-4
    pt-6
    /* Desktop vpravo hore s miernym odsadením od pravého okraja */
    lg:items-start lg:justify-end lg:pt-10 lg:pr-0 lg:absolute lg:top-0 lg:right-0


  "
            >
                <div className="
    w-full
    max-w-xs
    sm:max-w-sm
    text-white font-bold
    text-sm sm:text-base md:text-lg
    leading-tight
    text-right
    flex flex-col gap-3
    mt-0
    mb-12
  ">
                    {links.map(link => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition hover:underline inline-flex items-center gap-1"
                        >
                            <span>{link.name}</span>
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
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

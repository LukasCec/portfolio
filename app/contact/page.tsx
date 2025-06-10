"use client";
import {motion} from "framer-motion";
import Image from "next/image";


export default function Info() {
    return (
        <motion.div
            initial={{opacity: 0, y: 40, filter: "blur(8px)"}}
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

            <div className="hidden lg:block"/>

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

    px-10
  ">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-20 h-20 rounded-full object-cover object-top border-2 border-white/60 mb-3" src="my_foto.png" alt="My avatar"/>
                        <h3>Lukáš Čeč</h3>
                        <p className="font-extralight">Lector at Algorithmics s.r.o.</p>
                        <div className="h-[1px] w-4/5 bg-white"></div>
                        <div className="flex items-center space-x-2 mt-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope text-white" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                            <p className="font-extralight text-white">lukaskocec@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

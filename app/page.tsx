"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const bioText = `
Born in 2003
in Slovakia.
Passionate web developer,
constantly exploring
new technologies
and digital horizons.
Driven by curiosity
and the joy of learning,
I seek creative ways
to build, experiment,
and push boundaries
in web development.
`;

export default function Home() {

    const [showLoader, setShowLoader] = useState(false);
    const [loaderPhase, setLoaderPhase] = useState<'fade-in' | 'wait' | 'fade-out' | 'done'>('done');

    useEffect(() => {
        if (typeof window !== "undefined" && !sessionStorage.getItem("portfolio_loader_shown")) {
            setShowLoader(true);
            setLoaderPhase('fade-in');
            sessionStorage.setItem("portfolio_loader_shown", "true");
        }
    }, []);

    useEffect(() => {
        if (!showLoader) return;
        if (loaderPhase === 'fade-in') {
            const t = setTimeout(() => setLoaderPhase('wait'), 900);
            return () => clearTimeout(t);
        }
        if (loaderPhase === 'wait') {
            const t = setTimeout(() => setLoaderPhase('fade-out'), 1000);
            return () => clearTimeout(t);
        }
        if (loaderPhase === 'fade-out') {
            const t = setTimeout(() => setLoaderPhase('done'), 700);
            return () => clearTimeout(t);
        }
    }, [loaderPhase, showLoader]);

    const loaderVisible = showLoader && loaderPhase !== 'done';

    return (
        <>
            {/* Loader */}
            <AnimatePresence>
                {loaderVisible && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: loaderPhase === 'fade-in' ? 1 : 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: loaderPhase === 'fade-in' ? 0.9 : 0.7, ease: [0.23, 1, 0.32, 1] }}
                        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 24 }}
                            animate={{
                                opacity: loaderPhase === 'fade-in' || loaderPhase === 'wait' ? 1 : 0,
                                y: loaderPhase === 'fade-in' || loaderPhase === 'wait' ? 0 : -24,
                            }}
                            transition={{
                                duration: 0.9,
                                ease: [0.23, 1, 0.32, 1],
                            }}
                            className="text-white text-4xl sm:text-5xl md:text-7xl font-light tracking-tight select-none"
                        >
                            Lukáš Čeč <span className="font-normal">Portfolio</span>
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hlavný obsah */}
            <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{
                    opacity: loaderVisible ? 0 : 1,
                    y: loaderVisible ? 40 : 0,
                    filter: loaderVisible ? "blur(8px)" : "blur(0px)",
                }}
                transition={{
                    duration: 1,
                    delay: loaderVisible ? 0 : 0.1,
                    ease: [0.23, 1, 0.32, 1],
                }}
                className="contents"
                style={{
                    pointerEvents: loaderVisible ? "none" : "auto"
                }}
            >

                <div className="hidden lg:block" />


                <div
                    className="
            flex w-full h-full
            items-center justify-center
            px-4
            pt-6
            /* Desktop vpravo hore */
            lg:items-start lg:justify-end lg:pt-10 lg:pr-10 lg:absolute lg:top-0 lg:right-0
          "
                >
                    <div className="
            w-full
            max-w-xs
            sm:max-w-sm
            text-white
            text-sm sm:text-base md:text-lg
            leading-tight
            whitespace-pre-line
            text-right
            lg:text-right
            mt-0
            /* Na mobile posuň text vyššie pod navigáciu */
            lg:mt-0
            mb-6
            font-extralight
          ">
                        {bioText}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

import Link from "next/link";

export default function LeftSection() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Info", href: "/info" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
    ];
    return (
        <div
            className="
                z-10
                flex flex-col
                pt-6 px-4      // základné odsadenie pre mobil/tablet
                sm:pt-8 sm:px-6
                md:pt-10 md:px-8
                lg:pt-12 lg:pl-10 lg:pr-0
                "
        >
            <h1
                className="
                    z-10 font-extralight whitespace-nowrap leading-[1.1]
                    text-3xl      // najmenšie obrazovky
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[60px]
                "
            >
                Lukáš Čeč
            </h1>

            <p className="z-10 text-sm sm:text-base text-white/60 font-normal mb-2 mt-1">
                Game &amp; Web Developer
            </p>
            <nav className="z-10 mt-6 sm:mt-10 flex flex-col gap-2 text-base font-normal">
                {navLinks.map((item, i) => (
                    <Link
                        href={item.href}
                        key={item.name}
                        className={`
                            ${i === 0 ? "font-semibold" : ""}
                            transition-all duration-300 hover:translate-x-2
                            tracking-normal hover:tracking-widest
                            relative before:absolute before:left-[-1rem] before:opacity-0
                            hover:before:opacity-100 hover:before:content-['-'] before:transition-all
                            pl-0 sm:pl-1
                        `}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

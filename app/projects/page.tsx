// app/projects/page.tsx
import ScrollProxy from "@/app/components/ScrollProxy";
import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {
    return (
        <>

            <div className="hidden lg:block" />

            <div className="
                z-10 pt-6 pr-0 h-full 
                flex flex-col
                lg:pt-14 lg:pr-10
                w-full
                max-w-full
                ">
                <ScrollProxy>
                    <div className="
                        flex flex-col divide-y divide-white/10 custom-scrollbar overflow-y-auto h-full
                        max-w-full
                        lg:max-w-[760px] lg:ml-auto
                    ">
                        <ProjectCard
                            name="NKA Generator"
                            description="Visual editor and simulator for nondeterministic finite automata (NFA/NKA). Build, visualize, and test automatons interactively in your browser. Great for learning formal languages!"
                            tech={["nextjs2","python", "typescript", "react", "tailwindcss"]}
                            demoUrl="https://github.com/LukasCec/NKA-Generator"
                        />
                        <ProjectCard
                            name="Eatlator"
                            description="A calorie and nutrition tracker app. Lets users create meals, track daily intake, and gain insights into their diet and nutrition."
                            tech={["nextjs2", "python", "react", "typescript", "postgresql", "tailwindcss"]}
                            demoUrl="https://github.com/LukasCec/Eatlator"
                        />
                        <ProjectCard
                            name="GameStudio"
                            description="A web-based game portal with fun minigames, user accounts, and leaderboards. Built with Next.js and designed for extensibility with new games."
                            tech={["nextjs2", "spring", "java", "react", "typescript", "tailwindcss"]}
                            demoUrl="https://github.com/LukasCec/gamestudio_next_js"
                        />
                        <ProjectCard
                            name="Unseen Steps"
                            description="2D platformer in a glitchy ninja world. Reveal hidden environments with your cursor, fight enemies, and explore mysterious levels. Custom pixel art, unique 'defogging' mechanic, and atmospheric adventure."
                            tech={["csharp"]}
                            demoUrl="https://github.com/LukasCec/UnseenSteps"
                        />
                        <ProjectCard
                            name="WeatherWeb"
                            description="A simple and clean weather dashboard web app. Shows current weather, forecast, and other useful weather data for any location using live API data."
                            tech={["react", "typescript", "tailwindcss"]}
                            demoUrl="https://github.com/LukasCec/WeatherWeb"
                        />
                        <ProjectCard
                            name="CocktailWeb"
                            description="A web app for searching, exploring, and discovering cocktails. Browse recipes, ingredients, and instructions using an open cocktail database."
                            tech={["react", "typescript", "tailwindcss"]}
                            demoUrl="https://github.com/LukasCec/CocktailWeb"
                        />

                    </div>
                </ScrollProxy>
            </div>

            <div className="hidden lg:block mt-auto mb-2 text-xs text-white/30">© Lukáš Čeč</div>
        </>
    );
}

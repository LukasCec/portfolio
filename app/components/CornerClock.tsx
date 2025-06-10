
"use client";
import { useEffect, useState } from "react";


function getTime() {
    const now = new Date();

    return now.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export default function CornerClock() {
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const interval = setInterval(() => setTime(getTime()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="
                clock-side
                fixed left-2  z-50 ml-8
                bg-black/70 text-white rounded-lg px-3 py-1
                font-mono text-[16px] opacity-90 select-none
                shadow-md
                pointer-events-none
                lg:left-4 lg:bottom-4
            "
            style={{ letterSpacing: '0.04em' }}
        >
            {time} <span className="text-xs ml-2 opacity-70">UTC+1</span>
            <span className="hidden md:inline ml-3 text-xs opacity-40">keep coding!</span>
        </div>
    );
}

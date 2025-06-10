// Rozšírenie typu window, aby fungovalo window.THREE a window.VANTA
declare global {
    interface Window {
        THREE?: any;
        VANTA?: any;
    }
}
export {};

"use client";
import { useEffect, useRef } from "react";

export default function VantaBackground() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        let isMounted = true;

        function loadScript(src: string) {
            return new Promise<void>((resolve) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                document.body.appendChild(script);
            });
        }

        async function loadVanta() {
            if (!window.THREE) await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
            if (!window.VANTA) await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js");

            if (isMounted && window.VANTA && window.THREE) {
                vantaEffect.current = window.VANTA.WAVES({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x0,
                    shininess: 42.0,
                    waveHeight: 15.0,
                    waveSpeed: 0.4,
                    zoom: 1.3,
                });
            }
        }

        loadVanta();

        return () => {
            isMounted = false;
            if (vantaEffect.current) vantaEffect.current.destroy();
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="absolute inset-0 w-full h-full z-0"
            style={{
                position: "absolute",
                top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0,
            }}
        />
    );
}

'use client'
import { useRef, useEffect } from 'react';

export default function ScrollProxy({ children }: { children: React.ReactNode }) {
    const scrollDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const onWheel = (e: WheelEvent) => {

            if (!scrollDiv.current) return;

            const { scrollTop, scrollHeight, clientHeight } = scrollDiv.current;
            const atTop = scrollTop === 0;
            const atBottom = scrollTop + clientHeight === scrollHeight;


            if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) return;


            scrollDiv.current.scrollBy({ top: e.deltaY });

            e.preventDefault();
        };
        window.addEventListener('wheel', onWheel, { passive: false });
        return () => window.removeEventListener('wheel', onWheel);
    }, []);

    return (
        <div ref={scrollDiv} className="h-[calc(100vh-64px)] overflow-y-auto pb-20 pr-2">
            {children}
        </div>
    );
}

import React, { useEffect, useRef, useState } from 'react';

type props = {
    root?: Element | Document | null;
    rootMargin: string;
    setActive: React.Dispatch<React.SetStateAction<any>>;
    threshold: number;
};

export default ({ root = null, rootMargin, setActive, threshold = 0 }: props) => {
    const [node, setNode] = useState(null);

    let io;
    if (typeof window !== 'undefined') {
        io = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            },
            {
                root,
                rootMargin,
                threshold,
            },
        );
    }
    const observer = useRef(io);

    useEffect(() => {
        if (!observer || !observer.current) return;

        const { current: currentObserver } = observer;
        currentObserver.disconnect();

        if (node) currentObserver.observe(node);

        return () => currentObserver.disconnect();
    }, [node]);

    return [setNode];
};

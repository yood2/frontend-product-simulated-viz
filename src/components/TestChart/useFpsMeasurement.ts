import { useState, useEffect, useRef } from 'react';

export function useFpsMeasurement() {
    const [fps, setFps] = useState<number>(0);
    const [signalsPerSecond, setSignalsPerSecond] = useState<number>(0);
    const frameCountRef = useRef(0);
    const lastIntervalRef = useRef(Date.now());

    useEffect(() => {
        let animationFrameId: number;

        const measureFps = () => {
            frameCountRef.current++;
            animationFrameId = requestAnimationFrame(measureFps);
        };

        measureFps();

        const intervalId = setInterval(() => {
            const now = Date.now();
            const elapsed = (now - lastIntervalRef.current) / 1000;

            setFps(Math.round(frameCountRef.current / elapsed));
            frameCountRef.current = 0;
            lastIntervalRef.current = now;
        }, 1000);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearInterval(intervalId);
        };
    }, []);

    return { fps, setSignalsPerSecond };
}

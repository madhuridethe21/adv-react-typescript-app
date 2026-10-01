import Container from "./Container";
import { type Timer as TimerProps } from "../store/timers-context";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
    const [remainingTime, setRemainingTime] = useState(duration * 1000);
    const intervel = useRef<number | null>(null);
    if (remainingTime <= 0) {
        clearInterval(timer);
    }
    useEffect(() => {
        intervel.current = setInterval(function () {
            //Update some state
            setRemainingTime((prev) => prev - 50);
        }, 50);

    }, []);
    const remainingTimeformtated = (remainingTime / 1000).toFixed(2);
    return (
        <Container>
            <div className="p-4 border bg-gray-700 m-0.5 shadow-xl shadow-cyan-500/30">
                <h2>{name}</h2>
                <p>
                    <progress max={duration * 1000} value={remainingTime} />
                </p>
                <p>{remainingTimeformtated}</p>
            </div>
        </Container>
    );
}

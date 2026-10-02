import Container from "./Container";
import {
    useTimersContext,
    type Timer as TimerProps,
} from "../store/timers-context";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
    const [remainingTime, setRemainingTime] = useState(duration * 1000);
    const intervel = useRef<number | null>(null);
    const { isRunning } = useTimersContext();

    useEffect(() => {
        if (remainingTime <= 0) {
            if (intervel.current !== null) {
                clearInterval(intervel.current);
                intervel.current = null;
            }
        }
    }, [remainingTime]);
    useEffect(() => {
        console.log("Effect***********************");
        let timer: number;
        if (isRunning) {
            timer = setInterval(function () {
                //Update some state
                setRemainingTime((prev) => prev - 50);
            }, 50);
            intervel.current = timer;
        } else if (intervel.current){
            clearInterval(intervel.current);
        }

        return () => {
            //cleaning the interval
            clearInterval(timer);
        };
    }, [isRunning]);

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

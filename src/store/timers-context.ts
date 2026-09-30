import { createContext, useContext } from "react";

export type Timer = {
  name: string;
  duration: number;
};

export type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

export type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export const TimersContext =
  createContext<TimersContextValue | null>(null);

//craete a custom Timer COntext hook to access in required components
export function useTimersContext(){
    const Timersctx = useContext(TimersContext);
    if(Timersctx === null ){
        throw new Error('TimerContext is null-- That should not be the case!');
    }

    return Timersctx;
}
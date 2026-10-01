import Button from "./Button";
import  { useTimersContext } from'../store/timers-context.ts';
export default function Header(){
   const TimerContext = useTimersContext();
    console.log("TimerContext", TimerContext);
    return(
        <>
        <header  className="flex justify-center">
            <h1>React Timer</h1>
            <Button onClick={TimerContext.isRunning ? TimerContext.stopTimers : TimerContext.startTimers}>
                {TimerContext.isRunning? 'Stop ': 'Start '}Timers
            </Button>
        </header>
        </>
    )
}
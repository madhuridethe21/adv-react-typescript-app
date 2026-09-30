import { useReducer, type ReactNode } from "react";
import {
  TimersContext,
  type TimersState,
  type TimersContextValue,
  type Timer,
} from "./timers-context";

type TimerContextProviderProps = {
  children: ReactNode;
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

//USing discriminated Unions for creating Action Types , because each action is unique

type StartTimerActionType = {
  type: "START_TIMER";
};

type StopTimerActionType = {
  type: "STOP_TIMER";
};

type AddTimeActionType = {
  type: "ADD_TIMER";
  payload: Timer;
};
//Action Objects
type Action = StartTimerActionType | StopTimerActionType | AddTimeActionType;
//reducer function
function timersReducer(state: TimersState, action: Action): TimersState {
  //Switch case to execute the action and update the state
  if (action.type === "START_TIMER") {
    return {
      ...state, // copying the old state , So that its not lost
      isRunning: true,
    };
  }
  if (action.type === "STOP_TIMER") {
    return {
      ...state, // copying the old state , So that its not lost
      isRunning: false,
    };
  }
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }
  return state;
}
export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const [timserState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: timserState.timers,
    isRunning: timserState.isRunning,

    addTimer: (timerData) => {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },

    startTimers: () => {
      // start timers
      dispatch({ type: "START_TIMER" });
    },

    stopTimers: () => {
      // stop timers
      dispatch({ type: "STOP_TIMER" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

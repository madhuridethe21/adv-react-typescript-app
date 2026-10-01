import TimerContextProvider from "./store/TimersContext";
import Header from "./components/Header";
import Timers from "./components/Timers";
import AddTimer from "./components/AddTimer";
function App() {
  return (
    <div className="bg-gray-900 p-5 mx-auto w-full max-w-lg rounded-xl border shadow-sm">
      <TimerContextProvider>
        <Header />
        <main>
          <AddTimer />
          <Timers />
        </main>
      </TimerContextProvider>
    </div>
  );
}

export default App;

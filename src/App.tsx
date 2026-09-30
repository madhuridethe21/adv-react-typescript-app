import TimerContextProvider from "./store/TimersContext";
import Header from "./components/Header";
import Timer from "./components/Timer";
import AddTimer from "./components/Addtimer";
function App() {
  return (
    <TimerContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timer />
      </main>
    </TimerContextProvider>
  );
}

export default App;

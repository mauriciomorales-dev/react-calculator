import "./App.css";
import Calculator from "./components/Calculator";
import useCalculator from "./hooks/useCalculator";

const App: React.FC = () => {
  const [calcResult, setCalcResult] = useCalculator();
  return (
    <div className="App">
      <Calculator displayValue={calcResult} handleFunc={setCalcResult} />
    </div>
  );
};

export default App;

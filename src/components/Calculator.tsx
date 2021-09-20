import useCalculator from "../hooks/useCalculator";

const Calculator: React.FC = () => {
  const [calcResult, setCalcResult] = useCalculator();

  const kbOperators = ["AC", "÷", "x", "-", "+", "="];
  const kbNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  return (
    <div className="calculator">
      <div className="screen">
        <div className="operation" data-testid="display">
          {calcResult}
        </div>
      </div>
      <div className="keyboard">
        <div className="numbers">
          {kbNumbers.map((btn, index) => {
            return (
              <button key={index} onClick={() => setCalcResult(btn)}>
                {btn}
              </button>
            );
          })}
        </div>
        <div className="operators">
          {kbOperators.map((btn, index) => {
            return (
              <button key={index} onClick={() => setCalcResult(btn)}>
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

interface Props {
  displayValue: string;
  handleFunc: (value: string) => void;
}
const Calculator: React.FC<Props> = ({ displayValue, handleFunc }) => {
  const kbOperators = ["AC", "÷", "x", "-", "+", "="];
  const kbNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  return (
    <div className="calculator">
      <div className="screen">
        <div className="operation">{displayValue}</div>
      </div>
      <div className="keyboard">
        <div className="numbers">
          {kbNumbers.map((btn, index) => {
            return (
              <button key={index} onClick={() => handleFunc(btn)}>
                {btn}
              </button>
            );
          })}
        </div>
        <div className="operators">
          {kbOperators.map((btn, index) => {
            return (
              <button key={index} onClick={() => handleFunc(btn)}>
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

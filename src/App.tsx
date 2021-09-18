import "./App.css";

const App: React.FC = () => {
  const kbOperators = ["AC", "/", "*", "-", "+", "="];
  const kbNumbers = ["7", "8", "9", "4", "5", " 6", "1", "2", "3", "0"];

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">4376464+488585-5484844+3838</div>
        <div className="keyboard">
          <div className="numbers">
            {kbNumbers.map((btn) => {
              return <button>{btn}</button>;
            })}
          </div>
          <div className="operators">
            {kbOperators.map((btn) => {
              return <button>{btn}</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const kbOperators = ["AC", "/", "*", "-", "+", "="];
  const kbNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  const [operation, setOperation] = useState<string>("");

  const resetCalc = () => {
    setOperation("");
  };

  const actionExecution = {
    c: "AC",
    d: "Divie",
    m: "Multiply",
    mn: "Minus",
    p: "Plus",
    e: "equal",
  };

  const handleKeyboard = (value: string) => {
    const action = actionExecution["p"];
    console.log(action);
    //value === "AC" ? resetCalc() : setOperation(`${operation}${value}`);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          <div className="operation">{operation}</div>
        </div>
        <div className="keyboard">
          <div className="numbers">
            {kbNumbers.map((btn, index) => {
              return (
                <button key={index} onClick={() => handleKeyboard(btn)}>
                  {btn}
                </button>
              );
            })}
          </div>
          <div className="operators">
            {kbOperators.map((btn, index) => {
              return (
                <button key={index} onClick={() => handleKeyboard(btn)}>
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

/*
ESCENARIOS INICIALES:
ESC1- Display vacío.
ESC2- Display finalizado en Numero.
ESC3- Display finalizado en operador matemático (/,*,-,+).

ACCIONES
A1- Usuario presiona un numero.
A2- Usuario presiona un operador matemático (/,*,-,+).
A3- Usuario presiona un "="
A4- Usuario presiona un "AC"


Given ESC1
When A1
Then se concatena el VALOR con el valor en el DISPLAY.

Given ESC1
When A2
Then se IGNORA.

Given ESC1
When A1
Then se concatena el VALOR con el valor en el DISPLAY.

Given ESC1
When A1
Then se concatena el VALOR con el valor en el DISPLAY.

Given ESC1
When A1
Then se concatena el VALOR con el valor en el DISPLAY.
*/

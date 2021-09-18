import { useState } from "react";
import "./App.css";

/*
interface excecutThisInt {
  concatena: () => void;
  ignore: () => void;
  reset: () => void;
  excecute: () => void;
}
*/
const App: React.FC = () => {
  const excecutThis: any = {
    concatena: (value: string) => {
      handleOperation(value);
    },
    ignore: (value: string) => {
      console.log("ignore");
    },
    excecute: (value: string) => {
      handleCalc();
    },
    add: (value: number) => {
      return calculated + value;
    },
    substract: (value: number) => {
      return calculated - value;
    },
    multiply: (value: number) => {
      return calculated * value;
    },
    divide: (value: number) => {
      return calculated / value;
    },
  };

  const defOperators: any = {
    divide: { action: "A2", label: "/", operator: "/" },
    multiply: { action: "A2", label: "x", operator: "*" },
    substract: { action: "A2", label: "-", operator: "-" },
    add: { action: "A2", label: "+", operator: "+" },
    eql: { action: "A3", label: "=", operator: "" },
  };
  const kbOperators = ["divide", "multiply", "substract", "add", "eql"];
  const kbNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  const [working, setWorking] = useState<boolean>(false);
  const [operation, setOperation] = useState<string>("");
  const [calculated, setCalculated] = useState<number>(0);

  const handleOperation = (value: string) => {
    const curOperator = defOperators[value];
    const newVal = curOperator?.label || value;

    kbNumbers.includes(operation?.slice(-1));

    const showValue = working ? operation + newVal : newVal;

    //setCalculated(excecutThis[value](parseInt(value, 10)));
    setOperation(showValue);
    setWorking(true);
  };

  const handleCalc = () => {
    setWorking(!working);
    setOperation(calculated.toString());
  };
  const handleReset = () => {
    setWorking(!working);
    setOperation("");
  };

  const handleKeyboard = (value: string) => {
    const actionExecution: any = {
      A1A1: "concatena",
      A1A2: "concatena",
      A2A2: "ignore",
    };

    //DEfine ESCENARIO
    const lastVal = operation?.slice(-1);
    const curEsceOp = defOperators[lastVal];
    const curEsc = curEsceOp?.action || "A1";

    //DEfine ACTION
    const curOperator = defOperators[value];
    const curAction = curOperator?.action || "A1";

    console.log(curEsc + curAction);

    //Exceute
    excecutThis[actionExecution[curEsc + curAction]](value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          <div className="operation">{operation}</div>
          <div className="operation">{calculated}</div>
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
            <button onClick={() => handleReset()}>AC</button>
            {kbOperators.map((btn) => {
              return (
                <button key={btn} onClick={() => handleKeyboard(btn)}>
                  {defOperators[btn]["label"]}
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

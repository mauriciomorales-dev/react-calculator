import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const excecuteThis: any = {
    concatena: (value: string) => {
      handleOperation(value);
    },
    resetConcatena: (value: string) => {
      handleOperationReset(value);
    },

    ignore: (value: string) => {
      console.log("ignore");
    },
    excecute: (value: string) => {
      handleCalc();
    },
  };

  const defOperators: any = {
    d: { action: "OPER", label: "/", operator: "/" },
    m: { action: "OPER", label: "x", operator: "*" },
    s: { action: "OPER", label: "-", operator: "-" },
    a: { action: "OPER", label: "+", operator: "+" },
    eql: { action: "EQL", label: "=", operator: "" },
    NUM: { action: "NUM", label: "NUM", operator: "NUM" },
    REINIT: { action: "REINIT", label: "REINIT", operator: "REINIT" },
  };
  const kbOperators = ["d", "m", "s", "a", "eql"];
  const kbNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  const [start, setStart] = useState<string>("");
  const [rawOperation, setRawOperation] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [display, setDisplay] = useState<string>("");

  const handleOperationReset = (value: string) => {
    setStart("");
    setOperation(value);
    setDisplay(value);
  };
  const handleOperation = (value: string) => {
    setStart("");
    const curOperator = defOperators[value];

    const newVal = curOperator?.label || value;
    setDisplay(display + newVal);

    const newOpVal = curOperator?.operator || value;
    setOperation(operation + newOpVal);

    setRawOperation(rawOperation + value);
  };

  const handleCalc = () => {
    function evil(fn: any) {
      return new Function("return " + fn)();
    }
    let Total = evil(operation);
    setStart("RESTART");
    setOperation(Total.toString());
    setDisplay(Total.toString());
  };
  const handleReset = () => {
    setStart("");
    setOperation("");
    setDisplay("");
  };

  const defineValue = (value: string) => {
    const curValue = defOperators[value.replace(/\d+/g, "NUM")];
    const result = curValue?.action || "DEF";
    return result;
  };

  const handleKeyboard = (value: string) => {
    const actionExecution: any = {
      DEFNUM: "concatena",
      OPER: "concatena",
      STARTNUM: "concatena",
      RESTARTNUMNUM: "resetConcatena",
      RESTARTNUMOPER: "concatena",
      RESTARTDEFNUM: "concatena",
      NUMNUM: "concatena",
      NUMOPER: "concatena",
      NUMEQL: "excecute",
    };

    //DEfine ESCENARIO
    const typeLastValue = defineValue(operation?.slice(-1));
    const typeValue = defineValue(value);

    const Scenary = `${start}${typeLastValue}${typeValue}`;
    console.log(Scenary);

    //Exceute
    const NewAction = actionExecution[Scenary] || "ignore";
    excecuteThis[NewAction](value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          <div className="operation">{display}</div>
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
        <small>Operation: {operation}</small>
        <br />
        <small>Raw operation: {rawOperation}</small>
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

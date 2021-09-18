import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const kbOperators = [
    { op: "ac", label: "AC" },
    { op: "divide", label: "/" },
    { op: "multiply", label: "x" },
    { op: "substract", label: "-" },
    { op: "add", label: "+" },
    { op: "eql", label: "=" },
  ];

  const kbNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  const [operation, setOperation] = useState<string>("");

  const handleOperation = (value: string) => {
    const operators: any = {
      divide: "/",
      multiply: "*",
      substract: "-",
      add: "+",
    };
    const newVal = operators[value] || value;
    setOperation(operation + newVal);
  };

  const handleKeyboard = (value: string) => {
    const actionExecution: any = {
      ESC1A1: "concatena",
      ESC1A2: "Ignore",
      ESC1A3: "Ignore",
      ESC1A4: "Reset",

      ESC2A1: "concatena",
      ESC2A2: "concatena",
      ESC2A3: "Excute",
      ESC2A4: "Reset",

      ESC3A1: "concatena",
      ESC3A2: "Ignore",
      ESC3A3: "Ignore",
      ESC3A4: "Reset",
    };

    const Escenario: any = {
      isNUM: "ESC2",
      isOP: "ESC3",
    };
    const Action: any = {
      ac: "A4",
      divide: "A2",
      multiply: "A2",
      substract: "A2",
      add: "A2",
      eql: "A3",
    };

    const isNUMBER = kbNumbers.includes(operation?.slice(-1));
    const escVal = isNUMBER ? "isNUM" : "isOP";

    const curEscenario = Escenario[escVal] || "ESC1";
    const curAction = Action[value] || "A1";

    const actionExcs = actionExecution[curEscenario + curAction];

    actionExcs === "concatena"
      ? handleOperation(value)
      : actionExcs === "Reset"
      ? setOperation("")
      : actionExcs === "Excute"
      ? setOperation("TOTAL")
      : console.log(curEscenario + curAction + actionExcs);
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
            {kbOperators.map((btn) => {
              return (
                <button key={btn.op} onClick={() => handleKeyboard(btn.op)}>
                  {btn.label}
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

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
    suma: (value: number) => {
      return calculated + value;
    },
    resta: (value: number) => {
      return calculated - value;
    },
    multiplica: (value: number) => {
      return calculated * value;
    },
    divide: (value: number) => {
      return calculated / value;
    },
  };

  const kbOperators = [
    { op: "divide", label: "/" },
    { op: "multiply", label: "x" },
    { op: "substract", label: "-" },
    { op: "add", label: "+" },
    { op: "eql", label: "=" },
  ];

  const kbNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  const [working, setWorking] = useState<boolean>(false);
  const [operation, setOperation] = useState<string>("");
  const [calculated, setCalculated] = useState<number>(0);

  const handleOperation = (value: string) => {
    const operators: any = {
      divide: "/",
      multiply: "*",
      substract: "-",
      add: "+",
    };

    const newVal = operators[value] || value;
    const showValue = working ? operation + newVal : newVal;

    //const calcValue = calculated + operators[operation?.slice(-1)] + value;
    //console.log(calcValue);

    setCalculated(excecutThis.suma(parseInt(value, 10)));
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
      ESC1A1: "concatena",
      ESC1A2: "ignore",
      ESC1A3: "ignore",

      ESC2A1: "concatena",
      ESC2A2: "concatena",
      ESC2A3: "excecute",

      ESC3A1: "concatena",
      ESC3A2: "ignore",
      ESC3A3: "ignore",
    };

    const Escenario: any = {
      isNUM: "ESC2",
      isOP: "ESC3",
    };
    const Action: any = {
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

    const actionExcs =
      excecutThis[actionExecution[curEscenario + curAction]](value);
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

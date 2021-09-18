import { useState } from "react";
import "./App.css";

/*
interface excecuteThisInt {
  concatena: () => void;
  ignore: () => void;
  reset: () => void;
  excecute: () => void;
}
*/
const App: React.FC = () => {
  const excecuteThis: any = {
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
    divide: { action: "OPER", label: "/", operator: "/" },
    multiply: { action: "OPER", label: "x", operator: "*" },
    substract: { action: "OPER", label: "-", operator: "-" },
    add: { action: "OPER", label: "+", operator: "+" },
    eql: { action: "EQL", label: "=", operator: "" },
    NUM: { action: "NUM", label: "NUM", operator: "NUM" },
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

    //setCalculated(excecuteThis[value](parseInt(value, 10)));
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

  const defineValue = (value: string) => {
    const curValue = defOperators[value.replace(/\d+/g, "NUM")];
    const result = curValue?.action || "OPER";
    return result;
  };

  const handleKeyboard = (value: string) => {
    const actionExecution: any = {
      NUM: "concatena",
      NUMNUM: "concatena",
      OPERNUM: "concatena",
      NUMOPER: "concatena",
      OPEROPER: "ignore",
      NUMEQL: "excecute",
    };

    //DEfine ESCENARIO
    const typeLastValue = defineValue(operation?.slice(-1));
    const typeValue = defineValue(value);

    const Scenary = `${typeLastValue}${typeValue}`;
    console.log(Scenary);

    //Exceute
    const NewAction = actionExecution[Scenary] || "ignore";
    excecuteThis[NewAction](value);
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

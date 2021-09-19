import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const kbOperators = ["d", "m", "s", "a", "eql"];
  const kbNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const defOperators: any = {
    d: { action: "OPER", label: "/", operator: "/" },
    m: { action: "OPER", label: "x", operator: "*" },
    s: { action: "MINUS", label: "-", operator: "-" },
    a: { action: "OPER", label: "+", operator: "+" },
    eql: { action: "EQL", label: "=", operator: "" },
    NUM: { action: "NUM", label: "NUM", operator: "NUM" },
  };

  const excecuteThis: any = {
    concatena: (value: string) => {
      setStart("");
      const curOperator = defOperators[value];
      const newVal = curOperator?.label || value;
      setDisplay(display + newVal);
      const newOpVal = curOperator?.operator || value;
      setRawOperation(rawOperation + value);
    },
    resetConcatena: (value: string) => {
      setStart("");
      setDisplay(value);
      setRawOperation(value);
    },
    ignore: (value: string) => {
      //console.log("ignore");
    },
    excecute: (value: string) => {
      function evil(fn: any) {
        return new Function("return " + fn)();
      }
      let Total = evil(
        rawOperation
          .replaceAll("d", "/")
          .replaceAll("m", "*")
          .replaceAll("s", "-")
          .replaceAll("a", "+")
      ).toString();
      setStart("RESTART");
      setRawOperation(Total);
      setDisplay(Total);
    },
  };

  const [start, setStart] = useState<string>("");
  const [rawOperation, setRawOperation] = useState<string>("");
  const [display, setDisplay] = useState<string>("0");

  const handleReset = () => {
    setStart("");
    setRawOperation("");
    setDisplay("0");
  };

  const defineValue = (value: string) => {
    const curValue = defOperators[value.replace(/\d+/g, "NUM")];
    const result = curValue?.action || "DEF";
    return result;
  };

  const handleKeyboard = (value: string) => {
    const actionExecution: any = {
      DEFNUM: "concatena",
      NUMNUM: "concatena",
      NUMOPER: "concatena",
      OPERNUM: "concatena",
      NUMEQL: "excecute",
      RESTARTNUMOPER: "concatena",
      RESTARTNUMNUM: "resetConcatena",
      DEFMINUS: "concatena",
      MINUSNUM: "concatena",
      NUMMINUS: "concatena",
      RESTARTNUMMINUS: "concatena",
    };

    //DEfine ESCENARIO
    const typeLastValue = defineValue(rawOperation?.slice(-1));
    const typeValue = defineValue(value);

    const Scenary = `${start}${typeLastValue}${typeValue}`;
    console.log(Scenary);

    //Excecute
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

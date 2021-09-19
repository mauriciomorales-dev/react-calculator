import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const kbOperators = ["d", "m", "s", "a", "eql"];
  const kbNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const defOperators: any = {
    d: { type: "OPER", label: "÷", operator: "/" },
    m: { type: "OPER", label: "x", operator: "*" },
    s: { type: "MINUS", label: "-", operator: "-" },
    a: { type: "OPER", label: "+", operator: "+" },
    eql: { type: "EQL", label: "=", operator: "" },
    NUM: { type: "NUM", label: "NUM", operator: "NUM" },
    0: { type: "NUM", label: "0", operator: "0" },
    1: { type: "NUM", label: "1", operator: "1" },
    2: { type: "NUM", label: "2", operator: "2" },
    3: { type: "NUM", label: "3", operator: "3" },
    4: { type: "NUM", label: "4", operator: "4" },
    5: { type: "NUM", label: "5", operator: "5" },
    6: { type: "NUM", label: "6", operator: "6" },
    7: { type: "NUM", label: "7", operator: "7" },
    8: { type: "NUM", label: "8", operator: "8" },
    9: { type: "NUM", label: "9", operator: "9" },
  };

  const OpToDisplay = (rawOp: string) => {
    return rawOp
      .replaceAll("d", "÷")
      .replaceAll("m", "x")
      .replaceAll("s", "-")
      .replaceAll("a", "+")
      .replace(/^0+/, "");
  };

  const excecuteThis: any = {
    ignore: (value: string) => {
      //console.log("ignore");
    },
    reset: () => {
      setStart("");
      setRawOperation("");
    },
    concatena: (value: string) => {
      setStart("");
      setRawOperation(rawOperation + value);
    },
    resetConcatena: (value: string) => {
      setStart("");
      setRawOperation(value);
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
    },
  };

  const [start, setStart] = useState<string>("");
  const [rawOperation, setRawOperation] = useState<string>("0");

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

    //Define ESCENARIO
    const dv = (value: string) => {
      const curValue = defOperators[value];
      return curValue?.type || "DEF";
    };
    const Scenary = `${start}${dv(rawOperation.slice(-1))}${dv(value)}`;
    //console.log(Scenary);

    //Define function to excecute
    const Action = actionExecution[Scenary] || "ignore";
    excecuteThis[Action](value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          <div className="operation">{OpToDisplay(rawOperation)}</div>
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
            <button onClick={() => excecuteThis["reset"]()}>AC</button>
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

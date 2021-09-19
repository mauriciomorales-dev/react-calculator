import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  const OpToDisplay = (rawOp: string) => {
    return rawOp
      .replace(/^0+(?!$)/, "")
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const excecuteThis: any = {
    ignore: (value: string) => {
      //console.log("ignore");
    },
    reset: () => {
      setStart("");
      setRawOperation("0");
    },
    concat: (value: string) => {
      setStart("");
      setRawOperation(rawOperation + value);
    },
    resetConcat: (value: string) => {
      setStart("");
      setRawOperation(value);
    },
    excecute: (value: string) => {
      function evil(fn: any) {
        return new Function("return " + fn)();
      }
      setStart("RESTART");
      setRawOperation(
        evil(
          OpToDisplay(rawOperation).replaceAll("÷", "/").replaceAll("x", "*")
        ).toString()
      );
    },
  };

  const [start, setStart] = useState<string>("");
  const [rawOperation, setRawOperation] = useState<string>("0");

  const handleKeyboard = (value: string) => {
    const actionExecution: any = {
      DEFNUM: "concat",
      NUMNUM: "concat",
      NUMOPE: "concat",
      OPENUM: "concat",
      NUMEQL: "excecute",
      RESTARTNUMOPE: "concat",
      RESTARTNUMNUM: "resetConcat",
      DEFMIN: "concat",
      MINNUM: "concat",
      NUMMIN: "concat",
      RESTARTNUMMIN: "concat",
      RESTARTNUMAC: "reset",
      NUMAC: "reset",
      MINAC: "reset",
      OPEAC: "reset",
    };

    //Define ESCENARIO
    const dv = (value: string) => {
      const newValue = value
        .replace(/[0-9]/g, "NUM")
        .replace("÷", "OPE")
        .replace("+", "OPE")
        .replace("x", "OPE")
        .replace("-", "MIN")
        .replace("=", "EQL");
      return newValue || "DEF";
    };

    const Scenary = `${start}${dv(rawOperation.slice(-1))}${dv(value)}`;
    console.log(Scenary);
    //Define function to excecute
    const Action = actionExecution[Scenary] || "ignore";
    excecuteThis[Action](value);
  };

  return (
    <div className="App">
      <Calculator
        displayValue={OpToDisplay(rawOperation)}
        handleFunc={handleKeyboard}
      />
    </div>
  );
};

export default App;

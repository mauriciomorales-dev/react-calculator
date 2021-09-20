import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import {
  calculateOperation,
  displayOperation,
} from "./helpers/calculateOperation";

const App: React.FC = () => {
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
      setStart("RESTART");
      let Total: any = calculateOperation(rawOperation);
      setRawOperation(displayOperation(Total.toString()));
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
        .replaceAll(/[0-9]/g, "NUM")
        .replaceAll("÷", "OPE")
        .replaceAll("+", "OPE")
        .replaceAll("x", "OPE")
        .replaceAll("-", "MIN")
        .replaceAll("=", "EQL");
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
        displayValue={displayOperation(rawOperation)}
        handleFunc={handleKeyboard}
      />
    </div>
  );
};

export default App;

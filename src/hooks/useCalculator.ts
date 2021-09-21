import { useState } from "react";
import {
  calculateOperation,
  cleanOperation,
} from "../helpers/calculateOperation";

const useCalculator: any = () => {
  const excecuteThis: any = {
    reset: () => {
      setStart("");
      setRawOperation("0");
    },
    concat: (value: string) => {
      setStart("");
      setRawOperation(cleanOperation(rawOperation + value));
    },
    resetConcat: (value: string) => {
      setStart("");
      setRawOperation(value);
    },
    excecute: (value: string) => {
      setStart("r");
      let Total: any = calculateOperation(rawOperation);
      setRawOperation(cleanOperation(Total.toString()));
    },
  };

  const [start, setStart] = useState<string>("");
  const [rawOperation, setRawOperation] = useState<string>("0");

  const handleKeyboard = (value: string) => {
    const actionExecution: any = {
      concat: "concat",
      rconcat: "resetConcat",
      "r=": "excecute",
      "=": "excecute",
      ac: "reset",
      rac: "reset",
    };
    let keyActionoperation = value
      .replace(/[0-9]/g, start + "concat")
      .toLowerCase();
    let Action = actionExecution[keyActionoperation] || "concat";
    let ActionExce = excecuteThis[Action] || "ignore";
    ActionExce(value);
  };

  return [rawOperation, handleKeyboard];
};

export default useCalculator;

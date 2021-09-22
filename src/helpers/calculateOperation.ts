export const calculateOperation: any = (operation: string = "0") => {
  const mathThis: any = {
    "+": (n1: number, n2: number) => n1 + n2,
    "-": (n1: number, n2: number) => n1 - n2,
    "*": (n1: number, n2: number) => n1 * n2,
    "/": (n1: number, n2: number) => n1 / n2,
  };

  operation = cleanOperation(operation)
    .replace(/÷/g, "/")
    .replace(/x/g, "*")
    .replace(/,/g, "");

  let total = 0;
  const opArr = operation.match(/[+\-*\/]*(\.\d+|\d+(\.\d+)?)/g) || []; // eslint-disable-line
  for (let i = 0; i < opArr.length; i++) {
    let op = opArr[i].replace(/[0-9,.]/g, "") || "+";
    let num = parseFloat(opArr[i].replace(op, ""));
    total = mathThis[op](total, num);
  }
  return total || "0";
};

export const cleanOperation: any = (operation: string = "0") => {
  operation = operation
    .replace(/[^0-9x÷+\-\*\/\.]/g, "") // eslint-disable-line
    .replace(/^[^1-9\.\-\*\.]/, "") // eslint-disable-line
    .replace(/^[x÷+\*]/, "") // eslint-disable-line
    .replace(/^[\.]/, "0."); // eslint-disable-line

  //Replace consecutive operators
  const opArr = operation.match(/[\/\*x÷+-]{2,}/g) || []; // eslint-disable-line
  for (let i = 0; i < opArr.length; i++) {
    operation = operation.replace(opArr[i], opArr[i].charAt(0));
  }

  operation = operation.replace(/\B(?<!\.)(?=(\d{3})+(?!\d))/g, ",");

  //Replace repeated decimals separators
  const decArr = operation.match(/[.]([.0-9,]*)$/g) || []; // eslint-disable-line
  let decMatched: any = decArr.slice(-1).toString() || "";
  let decMatchedCorrected: any = decMatched.replace(/(?<=\..*)\./g, ""); // eslint-disable-line
  operation = operation.replace(decMatched, decMatchedCorrected);

  const comArr = operation.match(/[.]([,0-9]*)/g) || []; // eslint-disable-line
  let decComMatched: any = comArr.slice(-1).toString() || "";
  let decComMatchedCorrected: any = decComMatched.replace(/,/g, ""); // eslint-disable-line
  operation = operation.replace(decComMatched, decComMatchedCorrected);

  //.replace(/(?>\.)(?>[\,0-9]*)*(?>[.]*)/g, "");

  return operation || "0";
};

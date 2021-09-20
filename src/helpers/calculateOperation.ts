export const calculateOperation: any = (operation: string) => {
  const mathThis: any = {
    "+": (n1: number, n2: number) => n1 + n2,
    "-": (n1: number, n2: number) => n1 - n2,
    "*": (n1: number, n2: number) => n1 * n2,
    "/": (n1: number, n2: number) => n1 / n2,
  };
  var total = 0;

  operation = operation
    .replaceAll("÷", "/")
    .replaceAll("x", "*")
    .replaceAll(",", "");
  const opArr = operation.match(/[+\-*\/]*(\.\d+|\d+(\.\d+)?)/g) || []; // eslint-disable-line

  for (let i = 0; i < opArr.length; i++) {
    let op = opArr[i].replaceAll(/[0-9,.]/g, "") || "+";
    let num = parseFloat(opArr[i].replaceAll(op, ""));
    //console.log(`${opArr[i]}: ${total}${op}${num}`);

    total = mathThis[op](total, num);
  }
  return total;
};

export const displayOperation: any = (operation: string) => {
  return operation
    .replace(/^0+(?!$)/, "")
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

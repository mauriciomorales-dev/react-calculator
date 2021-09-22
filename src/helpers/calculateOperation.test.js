import { calculateOperation, cleanOperation } from "./calculateOperation";

//Calculations tests
test("Common math operation", () => {
  let operation = calculateOperation("5+6+7+3+3+2-3+4-5+6-7-8/4*2");
  expect(operation).toBe(6.5);
});
test("Operation with a number with thousands separator", () => {
  let operation = calculateOperation("2,789+45");
  expect(operation).toBe(2834);
});
test("Operation with a number with thousands separator and decimals", () => {
  let operation = calculateOperation("2,789+45-.78");
  expect(operation).toBe(2833.22);
});
test("Operation using ÷ operator instead of /", () => {
  let operation = calculateOperation("5÷2");
  expect(operation).toBe(2.5);
});
test("Operation using x operator instead of *", () => {
  let operation = calculateOperation("5x2");
  expect(operation).toBe(10);
});
test("Operation starting with decimal separator .", () => {
  let operation = calculateOperation(".3+5.4");
  expect(operation).toBe(5.7);
});

test("Display number with thousands separator.", () => {
  let operation = cleanOperation("9383838372727267367374788859594990021301230");
  expect(operation).toBe(
    "9,383,838,372,727,267,367,374,788,859,594,990,021,301,230"
  );
});

test("Display number with thousands separator + decimal", () => {
  let operation = cleanOperation(
    "9383838372727267367374788859594990021301230.9897"
  );
  expect(operation).toBe(
    "9,383,838,372,727,267,367,374,788,859,594,990,021,301,230.9897"
  );
});

const testArr = [
  [".23434433", "0.23434433"],
  ["+23434433", "23,434,433"],
  ["-23434433", "-23,434,433"],
  ["*23434433", "23,434,433"],
  ["x23434433", "23,434,433"],
  ["/23434433", "23,434,433"],
  ["÷23434433", "23,434,433"],
];

for (let i = 0; i < testArr.length; i++) {
  test("Test characters at the begining: " + testArr[i][0], () => {
    expect(cleanOperation(testArr[i][0])).toBe(testArr[i][1]);
  });
}

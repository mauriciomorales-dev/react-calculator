import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import Calculator from "./Calculator";

render(<Calculator />);

const display = screen.getByTestId("display");
//Numbers buttons
const one = screen.getByText(/1/i);
const two = screen.getByText(/2/i);
const three = screen.getByText(/3/i);
const four = screen.getByText(/4/i);
const five = screen.getByText(/5/i);
const six = screen.getByText(/6/i);
const seven = screen.getByText(/7/i);
const eight = screen.getByText(/8/i);
const nine = screen.getByText(/9/i);
//const zero = screen.getByText(/\0/i);

//Decimal button
const dec = screen.getByText(/\./i);

//Operators buttons
const ac = screen.getByText(/AC/i);
const plus = screen.getByText(/\+/i);
const minus = screen.getByText(/-/i);
const multiply = screen.getByText(/x/i);
const dividedBy = screen.getByText(/÷/i);
const equal = screen.getByText(/=/i);

test("Display clicking an operation", () => {
  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(five);
  expect(display).toHaveTextContent(`5`);

  // test clicking
  userEvent.click(plus);
  expect(display).toHaveTextContent(`5+`);

  // test clicking
  userEvent.click(three);
  expect(display).toHaveTextContent(`5+3`);

  // test clicking
  userEvent.click(four);
  expect(display).toHaveTextContent(`5+34`);

  // test clicking
  userEvent.click(equal);
  expect(display).toHaveTextContent(`39`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(one);
  expect(display).toHaveTextContent(`1`);

  // test clicking
  userEvent.click(three);
  expect(display).toHaveTextContent(`13`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(plus);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(dividedBy);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(multiply);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(two);
  expect(display).toHaveTextContent(`2`);

  // test clicking
  userEvent.click(equal);
  userEvent.click(equal);
  userEvent.click(equal);
  expect(display).toHaveTextContent(`2`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);

  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(minus);
  expect(display).toHaveTextContent(`-`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);
});

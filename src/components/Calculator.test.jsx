import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import Calculator from "./Calculator";

render(<Calculator />);

const display = screen.getByTestId("display");
//Numbers buttons
const one = screen.getByText(/1/i);
const two = screen.getByText(/2/i);
const tree = screen.getByText(/3/i);
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

test("Display clicking numbers", () => {
  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(one);
  expect(display).toHaveTextContent(`1`);

  // test clicking
  userEvent.click(tree);
  expect(display).toHaveTextContent(`13`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);
});

test("Display clicking starting with PLUS operator", () => {
  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(plus);
  expect(display).toHaveTextContent(`+`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);
});

test("Display clicking starting with an MINUS operator", () => {
  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(minus);
  expect(display).toHaveTextContent(`-`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);
});

test("Display clicking starting with an DIVIDEDBY operator", () => {
  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(dividedBy);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);
});

test("Display clicking starting with an MULTIPLY operator", () => {
  // assert initial state
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(multiply);
  expect(display).toHaveTextContent(`0`);

  // test clicking
  userEvent.click(ac);
  expect(display).toHaveTextContent(`0`);
});

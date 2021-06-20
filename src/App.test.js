import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";
import Form from "./components/form";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("test that App component renders", () => {
  render(<App />, container);
});

test("test that new-item-button is a button", () => {
  render(<Form />, container);
  const element = screen.getByTestId("new-item-button");
  console.log(element);
  expect(element.innerHTML.toLowerCase().includes("")).toBe(true);
});

test("test that new-item-input is an input ", () => {
  render(<Form />, container);
  const element = screen.getByTestId("new-item-input");
  console.log(element);

  expect(element.innerHTML.toLowerCase().includes("")).toBe(true);
});

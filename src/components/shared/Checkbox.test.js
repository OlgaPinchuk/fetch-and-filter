// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import Checkbox from "./Checkbox";

test("Should fire an event changes", () => {
  // Arrange
  const fakeMethod = jest.fn();
  render(<Checkbox onChange={fakeMethod} />);

  // Act
  const checkboxElement = screen.getByTestId("checkbox");

  fireEvent.click(checkboxElement);

  // Assert
  expect(fakeMethod).toHaveBeenCalledTimes(1);
});

test("Should be checked when is true", () => {
  // Arrange
  const fakeChecked = true;
  const fakeMethod = jest.fn();
  render(<Checkbox checked={fakeChecked} onChange={fakeMethod} />);

  // Act
  const checkboxElement = screen.getByTestId("checkbox");

  // Assert
  expect(checkboxElement.checked).toBe(true);
});

test("Should be unchecked when it is false.", () => {
  // Arrange
  const fakeChecked = false;
  const fakeMethod = jest.fn();
  render(<Checkbox checked={fakeChecked} onChange={fakeMethod} />);

  // Act
  const checkboxElement = screen.getByTestId("checkbox");

  // Assert
  expect(checkboxElement.checked).toBe(false);
});

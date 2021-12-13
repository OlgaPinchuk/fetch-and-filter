// NPM Packages
import { render, screen, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";

// Project files
import Filter from "./Filter";

// Constants
const fakePropMethod = jest.fn();
const fakePropOptions = [
  {
    id: 1,
    label: "Option 1",
    value: "https://swapi.dev/api/films/1/",
    selected: false,
  },
  {
    id: 2,
    label: "Option 2",
    value: "https://swapi.dev/api/films/2/",
    selected: false,
  },
];

test("Should show filter options when button Show filter options is pressed", () => {
  // Arrange
  render(<Filter options={fakePropOptions} onSelect={fakePropMethod} />);

  // Act
  const buttonElement = screen.getByTestId("toggle-button");

  fireEvent.click(buttonElement);
  const option1Text = screen.getByText(/option 1/i);
  const option2Text = screen.getByText(/option 2/i);

  // Assert
  expect(option1Text).toBeInTheDocument();
  expect(option2Text).toBeInTheDocument();
});


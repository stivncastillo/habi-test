import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Button from "./Button";

describe("<Button />", () => {
  test("button fire click event", () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Click me</Button>);
    const button = screen.getByRole("button");

    user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
